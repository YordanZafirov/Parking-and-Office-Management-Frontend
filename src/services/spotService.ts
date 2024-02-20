import { endpoints } from "../static/endpoints";
import { get } from "./fetchService";

export interface SpotInterface {
  id: string;
  name: string;
  description: string;
  isPermanent: string;
  top: number;
  left: number;
  spotTypeId: string;
  floorPlanId: string;
  createdAt: Date;
  updatedAt: Date;
  modifiedBy: string;
}

export const getSpotById = async (id: string): Promise<SpotInterface> => {
  const response = await get(`${endpoints.getSpots}/${id}`, {});
  return response;
};
