
import { SpotTypeInterface } from "../pages/Reservation/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export const getSpotType = async (): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

export const getSpotTypes = async (id: string): Promise<SpotTypeInterface[]> => {
  try {
    const response = await get(
      endpoints.getSpotTypes + "/search?locationId=" + id,
      {}
    );
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

export const getSpotTypeByLocationId = async (
  locationId: string
): Promise<SpotTypeInterface[]> => {
  const url = `${endpoints.getSpotTypes}/search?locationId=${locationId}`;

  try {
    const response = await get(url, {});

    if (!response.ok) {
      throw new Error("Failed to fetch spot types");
    }

    const data: SpotTypeInterface[] = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};
