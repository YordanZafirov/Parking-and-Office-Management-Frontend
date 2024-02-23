import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRangePicker } from 'react-date-range';
import Select from 'react-select';
import {
    CalendarContainer,
    StyledAppContainer,
    StyledCalendarContainer,
    StyledTimePicker,
    StyledTimePickerContainer,
} from './Calendar.style';
import { BaseButton } from '../../../components/CommonStyledElements';
import { useCalendar } from './Calendar.logic';
import { useEffect } from 'react';
import { dataProps } from './Calendar.static';

const CalendarPage = ({ sendDateTime = () => {} }: dataProps) => {
    const {
        dateTime,
        setDateTime,
        state,
        handleTimeChange,
        dateRangePickerProps,
        endTimeOptions,
        timeOptions,
        selectedTime,
    } = useCalendar();

    const handleMakeReservation = () => {
        const selectedStartTime = selectedTime.startTime;
        const selectedEndTime = selectedTime.endTime;

        const formattedStartDate = state[0]?.startDate ? new Date(state[0]?.startDate) : null;
        const formattedEndDate = state[0]?.endDate ? new Date(state[0]?.endDate) : null;

        if (formattedStartDate && formattedEndDate) {
            formattedStartDate.setHours(parseInt(selectedStartTime.split(':')[0], 10));
            formattedStartDate.setMinutes(parseInt(selectedStartTime.split(':')[1], 10));
            const startDateOutput = new Date(formattedStartDate).toISOString();

            const newFormattedEndDate = new Date(formattedEndDate);
            newFormattedEndDate.setHours(parseInt(selectedEndTime.split(':')[0], 10));
            newFormattedEndDate.setMinutes(parseInt(selectedEndTime.split(':')[1], 10));
            const newEndDate = newFormattedEndDate;
            const endDateOutput = new Date(newEndDate).toISOString();

            if (startDateOutput && endDateOutput) {
                setDateTime({
                    startDate: startDateOutput,
                    endDate: endDateOutput,
                    key: 'selection',
                });

                console.log('1', dateTime);
            }
        }
    };
    useEffect(() => {
        if (dateTime) {
            sendDateTime(dateTime);
        }
    }, [dateTime, sendDateTime]);

    return (
        <>
            <CalendarContainer>
                <StyledAppContainer className="outer-container">
                    <StyledAppContainer>
                        <StyledCalendarContainer>
                            <DateRangePicker {...dateRangePickerProps} />
                        </StyledCalendarContainer>
                        <StyledTimePickerContainer>
                            {state[0]?.startDate && (
                                <StyledTimePicker>
                                    <label>Start Time:</label>
                                    <Select
                                        options={timeOptions}
                                        value={
                                            selectedTime.startTime
                                                ? { value: selectedTime.startTime, label: selectedTime.startTime }
                                                : null
                                        }
                                        onChange={(selectedOption) =>
                                            handleTimeChange(selectedOption || { value: '', label: '' }, 'startTime')
                                        }
                                        className="custom-time-picker"
                                    />
                                    {state[0]?.endDate && (
                                        <>
                                            <label>End Time:</label>
                                            <Select
                                                options={endTimeOptions.filter((option) => !option.isDisabled)}
                                                value={
                                                    selectedTime.endTime
                                                        ? { value: selectedTime.endTime, label: selectedTime.endTime }
                                                        : null
                                                }
                                                onChange={(selectedOption) =>
                                                    handleTimeChange(
                                                        selectedOption || { value: '', label: '' },
                                                        'endTime',
                                                    )
                                                }
                                                className="custom-time-picker"
                                            />
                                        </>
                                    )}
                                </StyledTimePicker>
                            )}
                        </StyledTimePickerContainer>
                    </StyledAppContainer>
                    <BaseButton
                        className="reservation-btn"
                        onClick={() => {
                            handleMakeReservation();
                        }}
                    >
                        Set Reservation Period
                    </BaseButton>
                </StyledAppContainer>
            </CalendarContainer>
        </>
    );
};

export default CalendarPage;
