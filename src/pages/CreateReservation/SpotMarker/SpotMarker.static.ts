import { SpotMarker } from '../../CreateSpots/AddSpotForm/AddSpotForm.static';
import { DateRangeOutput } from '../Calendar/Calendar.static';

interface CustomSpotMarker extends SpotMarker{
    period?: DateRangeOutput;
    spotType?: string;
}

export type { CustomSpotMarker };
