import { endpoints } from "../static/endpoints";
import { ReservationInterface } from "./RESERVATION_INTERFACE";
import { get } from "./fetchService";

export const getAllReservations = async (): Promise<ReservationInterface[]> => {
  const response = await get(endpoints.getReservations, {});
  return response;
};

export const getFutureReservationsByUserId = async (
  userId: string
): Promise<ReservationInterface[]> => {
  const response = await get(
    `${endpoints.getReservations}/by-user-future/${userId}`,
    {}
  );
  return response;
};
