import { SpotTypeInterface } from "../pages/Reservation/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export const getSpotType = async (): Promise<SpotTypeInterface[]> => {
  const response = await get(endpoints.getSpotTypes, {});
  return response;
};

export const getSpotTypes = async (
  id: string
): Promise<SpotTypeInterface[]> => {
  const response = await get(
    endpoints.getSpotTypes + "/search?locationId=" + id,
    {}
  );
  return response;
};

export const getSpotTypeByLocationId = async (
  id: string
): Promise<SpotTypeInterface[]> => {
  const response = await get(
    endpoints.getSpotTypes + "/search?locationId=" + id,
    {}
  );
  return response;
};
