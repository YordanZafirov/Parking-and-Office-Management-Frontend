import { CustomSpotMarker, MultipleSpots } from '../pages/CreateSpots/AddSpotForm/AddSpotForm.static';
import { endpoints } from '../static/endpoints';
import { get, post } from './fetchService';
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

const getAll = async (): Promise<CustomSpotMarker[]> => {
    return await get(`${endpoints.getSpots}`, {});
};

const getSpotById = async (id: string): Promise<SpotInterface> => {
    const response = await get(`${endpoints.getSpots}/${id}`, {});
    return response;
};

const checkSpot = async ({
    top,
    left,
    name,
    description,
    isPermanent,
    spotTypeId,
    floorPlanId,
    modifiedBy,
}: CustomSpotMarker): Promise<CustomSpotMarker> => {
    return await post(`${endpoints.checkSpot}`, {
        top,
        left,
        name,
        description,
        isPermanent,
        spotTypeId,
        floorPlanId,
        modifiedBy,
    });
};

const createMultipleSpots = async ({ markers }: MultipleSpots): Promise<MultipleSpots> => {
    return await post(`${endpoints.createSpot}`, { markers });
};

export { getAll, getSpotById, checkSpot, createMultipleSpots };
