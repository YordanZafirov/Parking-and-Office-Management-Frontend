import { MultipleReservations } from '../pages/CreateReservation/SpotSelection/SpotSelection.static';
import { ReservationInterface } from '../pages/Reservation/Reservation.static';
import { endpoints } from '../static/endpoints';
import { get, del, post } from './fetchService';

// Function to get all reservations
export const getAllReservations = async (): Promise<ReservationInterface[]> => {
    const response = await get(endpoints.reservation, {});
    return response;
};

// Function to get all reservations by user id
export const getFutureReservationsByUserId = async (userId: string): Promise<ReservationInterface[]> => {
    const response = await get(endpoints.getFutureReservationsByUser + userId, {});
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

//endpoints.deleteReservation + reservationId

