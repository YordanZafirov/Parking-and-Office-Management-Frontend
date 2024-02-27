import { addDays } from 'date-fns';
import { useState } from 'react';
import { DateRange } from 'react-date-range';
import { DateRangeOutput, DateRangePickerProps } from './Calendar.static';

export const useCalendar = () => {
    const [state, setState] = useState<DateRange[]>([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 0),
            key: 'selection',
        },
    ]);

    const [dateTime, setDateTime] = useState<DateRangeOutput>();

    const [selectedTime, setSelectedTime] = useState({
        startTime: '00:00',
        endTime: '24:00',
    });

    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 365); // User will see next 1 year

    // Function to handle the time change
    const handleTimeChange = (selectedOption: { value: string; label: string }, type: 'startTime' | 'endTime') => {
        const time = selectedOption.value;
        setSelectedTime((prev) => ({
            ...prev,
            [type]: time,
        }));
    };

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

    const startHour = 0;
    const endHour = 24;

    // Check end hours to after start hours
    const timeOptions = Array.from({ length: endHour - startHour + 1 }, (_, i) => {
        const hour = startHour + i;
        return {
            value: `${hour < 10 ? '0' : ''}${hour}:00`,
            label: `${hour < 10 ? '0' : ''}${hour}:00`,
        };
    });

    // Disable end times that are before the selected start time
    const disabledEndTimes = timeOptions
        .map((option) => option.value)
        .filter((value) => value <= selectedTime.startTime);

    // Disable start times that are after the selected end time
    const endTimeOptions = timeOptions.map((option) => ({
        ...option,
        isDisabled: disabledEndTimes.includes(option.value),
    }));

    // Date range picker props
    const dateRangePickerProps: DateRangePickerProps = {
        onChange: (item) => setState([item.selection]),
        showPreview: true,
        moveRangeOnFirstSelection: false,
        months: 1,
        ranges: state,
        direction: 'horizontal',
        showDateDisplay: false,
        minDate: new Date(),
        maxDate: maxDate,
    };

    return {
        dateTime,
        state,
        handleTimeChange,
        dateRangePickerProps,
        endTimeOptions,
        handleMakeReservation,
        timeOptions,
        selectedTime,
    };
};
