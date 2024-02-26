import { ReservationInterface } from '../pages/Reservation/Reservation.static';
import { endpoints } from '../static/endpoints';
import { get, del } from './fetchService';

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

// Function to delete a reservation
export const deleteReservation = async (reservationId: string): Promise<void> => {
    await del(`${endpoints.reservation}/${reservationId}`, {});
};

//endpoints.deleteReservation + reservationId
