import { get } from "./fetchService";
import { endpoints } from "../static/endpoints";
import { Location } from "../pages/Home/Home.static";

// Function to get all locations
export const getLocations = async (): Promise<Location[]> => {
  try {
    const response = await get(endpoints.getLocations, {});
    return response;
  } catch {
    throw new Error("Failed to fetch locations");
  }
};

// Function to get location by id
export const getLocation = async (id: string): Promise<Location[]> => {
  try {
    const response = await get(endpoints.getLocations + "/" + id, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch location");
  }
};
