import { Marker } from "react-image-marker";

interface CustomSpotMarker extends Marker {
    name?: string;
    description?: string;
    isPermanent?: boolean;
    spotType?: string;
    floorPlanId?: string;
    modifiedBy?: string;
    error?: string;
}

export type { CustomSpotMarker };
