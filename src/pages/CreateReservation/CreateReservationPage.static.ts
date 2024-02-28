export interface GetFreeSpot {
    floorPlanId: string;
    spotTypeId: string;
    start: string;
    end: string;
}
export interface GetSpotOccupancy {
    locationId: string | undefined;
    spotTypeId: string;
    start: string;
    end: string;
}
