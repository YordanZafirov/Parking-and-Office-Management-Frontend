import { GetFreeSpot } from '../pages/CreateReservation/CreateReservationPage.static';
import { GetSpot, SpotInterface } from '../pages/CreateReservation/SpotMarker/SpotMarker.static';
import { MultipleSpots, SpotMarker } from '../pages/CreateSpots/AddSpotForm/AddSpotForm.static';
import { endpoints } from '../static/endpoints';
import { get, post } from './fetchService';

// Function to get all spots
const getAll = async (): Promise<SpotMarker[]> => {
    return await get(`${endpoints.getSpots}`, {});
};

// Function to get a spot by id
const getSpotById = async (id: string): Promise<SpotInterface> => {
    const response = await get(`${endpoints.getSpots}/${id}`, {});
    return response;
};

// Function to get a spot by floor plan id
const getSpotsByFloorPlanId = async (floorPlanId: string): Promise<SpotMarker[]> => {
    const spots = await get(`${endpoints.getSpotsByFloorPlanId}?floorPlanId=${floorPlanId}`, {});
    return spots;
};

// Function to get all spots by spot type and floor plan
const getAllBySpotTypeAndFloorPlan = async ({ floorPlanId, spotTypeId }: GetSpot): Promise<SpotMarker[]> => {
    const data = { floorPlanId: floorPlanId, spotTypeId: spotTypeId };

    return await get(`${endpoints.getBySpotTypeAndFloorPlan}?floorPlanId=${floorPlanId}&spotTypeId=${spotTypeId}`, {
        data,
    });
};

// Function to get free spots by spot type and location
const getFreeSpotsBySpotTypeAndLocation = async ({
    floorPlanId,
    spotTypeId,
    start,
    end,
}: GetFreeSpot): Promise<SpotMarker[]> => {
    console.log(start);
    console.log(end);

    const data = {
        floorPlanId: floorPlanId,
        spotTypeId: spotTypeId,
        startDateTime: start,
        endDateTime: end,
    };
    console.log('SERVICE', data);

    return await get(
        `${endpoints.getFreeBySpotTypeAndFloorPlan}?floorPlanId=${floorPlanId}&spotTypeId=${spotTypeId}&startDateTime=${start}&endDateTime=${end}`,
        {
            data,
        },
    );
};

// Function to check a spot
const checkSpot = async ({
    top,
    left,
    name,
    description,
    isPermanent,
    spotTypeId,
    floorPlanId,
    modifiedBy,
}: SpotMarker): Promise<SpotMarker> => {
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

// Function to create multiple spots
const createMultipleSpots = async ({ markers }: MultipleSpots): Promise<MultipleSpots> => {
    return await post(`${endpoints.createSpot}`, { markers });
};

export {
    getAll,
    getSpotById,
    checkSpot,
    createMultipleSpots,
    getSpotsByFloorPlanId,
    getAllBySpotTypeAndFloorPlan,
    getFreeSpotsBySpotTypeAndLocation,
};
