import { SpotType } from "../pages/Location/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export const getSpotType = async (): Promise<SpotType[]> => {
  try {
    const response = await get(endpoints.getSpotTypes, {});
    return response;
  } catch (error) {
    throw new Error("Failed to fetch spot types");
  }
};

export const getSpotTypes = async (id: string): Promise<SpotType[]> => {
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
): Promise<SpotType[]> => {
  const response = await get(endpoints.getSpotTypes + "/search?locationId=" + locationId, {});
  return response;
  // const url = `${endpoints.getSpotTypes}/search?locationId=${locationId}`;

  // try {
  //   const response = await get(url, {});

  //   if (!response.ok) {
  //     throw new Error("Failed to fetch spot types");
  //   }

  //   const data: SpotType[] = await response.json();
  //   return data;
  // } catch (error) {
  //   throw new Error("Failed to fetch spot types");
  // }
};
