interface CustomSpotMarker {
    id?: string;
    // eslint-disable-next-line @typescript-eslint/ban-types
    top?: Number;
    // eslint-disable-next-line @typescript-eslint/ban-types
    left?: Number;
    name?: string;
    description?: string;
    isPermanent?: boolean;
    spotTypeId?: string;
    floorPlanId?: string;
    modifiedBy?: string;
    error?: string;
}

export type { CustomSpotMarker };