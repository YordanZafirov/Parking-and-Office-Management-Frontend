import { DateRange } from 'react-date-range';
import { SpotType } from '../../Reservation/SpotType/SpotType.static';

export interface DateRangePickerProps {
    onChange: (item: { [key: string]: DateRange }) => void;
    showPreview: boolean;
    moveRangeOnFirstSelection: boolean;
    months: number;
    ranges: DateRange[];
    direction: string;
    showDateDisplay: boolean;
    minDate: Date;
    maxDate?: Date | null | undefined;
}

export interface CalendarData {
    data: DateRangeOutput;
}

export interface TimeOption {
    value: string;
    label: string;
}

export interface DateRangeOutput {
    startDate: string;
    endDate: string;
    key: string;
}

export interface dataProps {
    sendDateTime: (data: DateRangeOutput) => void;
    spotType: SpotType;
}
