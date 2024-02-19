import { SpotTypeInterface } from "../pages/Location/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export const getSpotTypes = async (): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

export const getSpotType = async (id: string): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(`${endpoints.getSpotTypes}/${id}`, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

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
