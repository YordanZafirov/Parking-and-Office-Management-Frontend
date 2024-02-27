import { MultipleReservations } from '../pages/CreateReservation/SpotSelection/SpotSelection.static';
import { ReservationInterface } from '../static/types';

import { endpoints } from '../static/endpoints';
import { get, del, post } from './fetchService';

// Function to get all reservations
export const getAllReservations = async (): Promise<ReservationInterface[]> => {
    const response = await get(endpoints.reservation, {});
    return response;
};

// Function to get all past reservations by user
// TODO
export const getPastReservationsByUserId = async (id: string | undefined): Promise<ReservationInterface[]> => {
    const response = await get(`${endpoints.getPastReservationsByUser}${id}`, {});
    return response;
};

// Function to get all current reservations by user
export const getCurrentReservationsByUserId = async (id: string | undefined): Promise<ReservationInterface[]> => {
    const response = await get(`${endpoints.getCurrentReservationsByUser}${id}`, {});
    return response;
};

// Function to get all future reservations by user
export const getFutureReservationsByUserId = async (id: string | undefined): Promise<ReservationInterface[]> => {
    const response = await get(`${endpoints.getFutureReservationsByUser}${id}`, {});
    return response;
};

export const getResevationsBySpot = async (spotId: string): Promise<ReservationInterface[]> => {
    const response = await get(`${endpoints.getResevationsBySpotId}/${spotId}`, {});
    return response;
};

export const checkReservation = async ({
    spotId,
    start,
    end,
    comment,
    userId,
    modifiedBy,
}: ReservationInterface): Promise<ReservationInterface> => {
    return await post(`${endpoints.checkReservation}`, {
        spotId,
        start,
        end,
        comment,
        userId,
        modifiedBy,
    });
};

export const createReservation = async ({ reservations }: MultipleReservations): Promise<MultipleReservations> => {
    return await post(`${endpoints.createReservation}`, { reservations });
};

// Function to delete a reservation
export const deleteReservation = async (reservationId: string): Promise<void> => {
    await del(`${endpoints.reservation}/${reservationId}`, {});
};
