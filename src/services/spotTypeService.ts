import { SpotType } from '../pages/SpotType/SpotTypeCards/SpotTypeCards.static';
import { endpoints } from '../static/endpoints';
import { get } from './fetchService';

export const getSpotTypes = async (): Promise<SpotType[]> => {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
};

export const getSpotType = async (id: string): Promise<SpotType> => {
    const response = await get(`${endpoints.getSpotTypes}/${id}`, {});
    return response;
};

export const getSpotTypeByLocationId = async (id: string): Promise<SpotType[]> => {
    const response = await get(endpoints.getSpotTypes + '/search?locationId=' + id, {});
    return response;
};
