import { del, get, post } from "./fetchService";
import { endpoints } from "../static/endpoints";
import { LocationInterface } from "../pages/Location/Location.static";
import { LocationCreate } from "../pages/Location/LocationCreate/LocationCreate.static";

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

// Function to add a new location
export const addLocation = async (
  locationData: LocationCreate
): Promise<LocationCreate> => {
  const response = await post(endpoints.createLocation, locationData);
  return response;
};

// Function to delete location by id
export const deleteLocation = async (id: string): Promise<void> => {
  const response = await del(endpoints.getLocations + "/" + id, {});
  return response;
};
