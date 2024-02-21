import { SpotTypeInterface } from "../pages/Reservation/SpotType/SpotType.static";
import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export const getSpotTypes = async (): Promise<SpotTypeInterface[]> => {
  const response = await get(endpoints.getSpotTypes, {});
  return response;
};

export const getSpotType = async (id: string): Promise<SpotTypeInterface[]> => {
  // http://localhost:3000/spot-type/${id}
  const response = await get(`${endpoints.getSpotTypes}/${id}`, {});
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
