import { SpotTypeInterface } from '../pages/SpotType/SpotTypeCards/SpotTypeCards.static';
import { endpoints } from '../static/endpoints';
import { get } from './fetchService';

// Function to get all spot types
export const getSpotTypes = async (): Promise<SpotTypeInterface[]> => {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
};

// Function to get a spot type by id
export const getSpotType = async (id: string): Promise<SpotTypeInterface[]> => {
    const response = await get(`${endpoints.getSpotTypes}/${id}`, {});
    return response;
};

// Function to get a spot type by location id
export const getSpotTypeByLocationId = async (id: string): Promise<SpotTypeInterface[]> => {
    const response = await get(endpoints.getSpotTypes + '/search?locationId=' + id, {});
    return response;
};
