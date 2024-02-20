import { SpotTypeInterface } from "../pages/Reservation/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

// Function to get all spot types
export const getSpotTypes = async (): Promise<SpotTypeInterface[]> => {
  const response = await get(endpoints.getSpotTypes, {});
  return response;
};

// Function to get spot type by id
export const getSpotType = async (
  spotTypeId: string
): Promise<SpotTypeInterface[]> => {
  const response = await get(`${endpoints.getSpotTypes}/${spotTypeId}`, {});
  return response;
};

// Function to get spot type by location id
export const getSpotTypeByLocationId = async (
  id: string
): Promise<SpotTypeInterface[]> => {
  const response = await get(
    `${endpoints.getSpotTypes}/search?locationId=${id}`,
    {}
  );
  return response;
  const response = await get(
    `${endpoints.getSpotTypes}/search?locationId=${id}`,
    {}
  );
  return response;
};
