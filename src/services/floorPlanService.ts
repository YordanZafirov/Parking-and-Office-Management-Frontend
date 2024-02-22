import { endpoints } from '../static/endpoints';
import { get } from './fetchService';

export interface FloorPlan {
    id?: string;
    name: string;
    imgUrl: string;
    locationId: string;
    modifiedBy?: string;
}

const getAllBySpotTypeAndLocation = async (spotTypeId: string, locationId: string): Promise<FloorPlan[]> => {
    return await get(`${endpoints.getBySpotTypeAndLocation}spotTypeId=${spotTypeId}&locationId=${locationId}`, {
        spotTypeId,
        locationId,
    });
};


export { getAllBySpotTypeAndLocation };
