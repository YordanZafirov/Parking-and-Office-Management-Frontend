import { SpotTypeInterface } from "../pages/Location/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

// Function to get all spot types
export const getSpotTypes = async (): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

// Function to get spot type by id
export const getSpotType = async (id: string): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(`${endpoints.getSpotTypes}/${id}`, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

// Function to get spot type by location id
export const getSpotTypeByLocationId = async (
  id: string
): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(
      `${endpoints.getSpotTypes}/search?locationId=${id}`,
      {}
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};
