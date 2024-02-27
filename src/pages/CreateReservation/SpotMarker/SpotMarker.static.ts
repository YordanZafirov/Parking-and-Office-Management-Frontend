import { SpotMarker } from '../../CreateSpots/AddSpotForm/AddSpotForm.static';
import { DateRangeOutput } from '../Calendar/Calendar.static';

interface CustomSpotMarker extends SpotMarker {
    period?: DateRangeOutput;
    spotType?: string;
}

interface SpotInterface {
    id: string;
    name: string;
    description: string;
    isPermanent: string;
    top: number;
    left: number;
    spotTypeId: string;
    floorPlanId: string;
    createdAt: Date;
    updatedAt: Date;
    modifiedBy: string;
}

interface GetSpot {
    floorPlanId: string;
    spotTypeId: string;
}

export type { CustomSpotMarker, SpotInterface, GetSpot };
