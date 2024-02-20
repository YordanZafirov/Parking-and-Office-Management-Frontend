import { get } from "./fetchService";
import { endpoints } from "../static/endpoints";
import { LocationInterface } from "../pages/Reservation/Location.static";

// Function to get all locations
export const getLocations = async (): Promise<LocationInterface[]> => {
    const response = await get(endpoints.getLocations, {});
    return response;
};

// Function to get location by id
export const getLocation = async (id: string): Promise<LocationInterface> => {
    const response = await get(endpoints.getLocations + "/" + id, {});
    return response;
};
