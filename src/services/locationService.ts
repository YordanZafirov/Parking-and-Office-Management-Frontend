import { get } from "./fetchService";
import { endpoints } from "../static/endpoints";
import { Location } from "../pages/Home/Home.static";

// Function to get all locations
export const getLocations = async (): Promise<Location[]> => {
  const response = await get(endpoints.getLocations, {});
  return response;
};

// Function to get location by id
export const getLocation = async (id: string): Promise<Location[]> => {
  const response = await get(endpoints.getLocations + "/" + id, {});
  return response;
};
