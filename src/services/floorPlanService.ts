import { FloorPlan } from '../pages/FloorPlan/FloorPlan.static';
import { endpoints } from '../static/endpoints';
import { del, get, patch, post } from './fetchService';

const getAllBySpotTypeAndLocation = async (spotTypeId: string, locationId: string): Promise<FloorPlan[]> => {
    return await get(`${endpoints.getBySpotTypeAndLocation}spotTypeId=${spotTypeId}&locationId=${locationId}`, {
        spotTypeId,
        locationId,
    });
};

export { getAllBySpotTypeAndLocation };

// Function to get all FloorPlan
export const getFloorPlans = async (): Promise<FloorPlan[]> => {
    const response = await get(endpoints.getFloorPlans, {});
    return response;
};

// Function to get FloorPlan by id
export const getFloorPlan = async (id: string): Promise<FloorPlan> => {
    const response = await get(endpoints.getFloorPlans + '/' + id, {});
    return response;
};

// Function to add a new FloorPlan
export const addFloorPlan = async (floorPlanData: FloorPlan): Promise<FloorPlan> => {
    const response = await post(endpoints.createFloorPlan, floorPlanData);
    return response;
};

// Function to update a new FloorPlan
export const updateFloorPlan = async (id: string, updatedData: FloorPlan): Promise<FloorPlan> => {
    const response = await patch(endpoints.getFloorPlans + '/' + id, updatedData);
    return response;
};

// Function to delete FloorPlan by id
export const deleteFloorPlan = async (id: string): Promise<void> => {
    const response = await del(endpoints.getFloorPlans + '/' + id, {});
    return response;
};
