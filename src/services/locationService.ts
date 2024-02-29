import { del, get, post, patch } from './fetchService';
import { endpoints } from '../static/endpoints';
import { Location } from '../pages/Home/Home.static';
import { LocationCreate } from '../pages/LocationCreate/LocationCreate.static';

export const getLocations = async (): Promise<Location[]> => {
    const response = await get(endpoints.getLocations, {});
    return response;
};

export const getLocation = async (id: string): Promise<Location> => {
    const response = await get(endpoints.getLocations + '/' + id, {});
    return response;
};

export const addLocation = async (locationData: LocationCreate): Promise<LocationCreate> => {
    const response = await post(endpoints.createLocation, locationData);
    return response;
};

export const updateLocation = async (id: string, updatedData: LocationCreate): Promise<LocationCreate> => {
    const response = await patch(endpoints.getLocations + '/' + id, updatedData);
    return response;
};

export const deleteLocation = async (id: string): Promise<void> => {
    const response = await del(endpoints.getLocations + '/' + id, {});
    return response;
};
