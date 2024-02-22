import { LoginUser } from "../pages/Login/Login.static";
import { User } from "../pages/User/UsersPage/UsersPage.static";
import { endpoints } from "../static/endpoints";
import { del, get, post } from "./fetchService";

export interface ReservationToFix {
  id: string;
  start: Date;
  end: Date;
  comment: string;
  spotId: string;
  userId: string;
  modifiedBy: string;
}

export interface RegisterUser {
  email: string;
  password: string;
  modifiedBy: string | undefined;
  error?: string;
}

export const getUsers = async (): Promise<User[]> => {
  const response = await get(`${endpoints.user}`, {});
  return response;
};
export const getUser = async (id: string | undefined): Promise<User> => {
  const response = await get(`${endpoints.user}/${id}`, {});
  return response;
};
export const deleteUser = async (id: string): Promise<User> => {
  const response = await del(`${endpoints.user}/${id}`, {});
  return response;
};

// TODO
export const getPastReservationsByUser = async (
  id: string | undefined
): Promise<ReservationToFix[]> => {
  const response = await get(`${endpoints.getPastReservationsByUser}${id}`, {});
  return response;
};
export const getCurrentReservationsByUser = async (
  id: string | undefined
): Promise<ReservationToFix[]> => {
  const response = await get(`${endpoints.getCurrentReservationsByUser}${id}`, {});
  return response;
};
export const getFutureReservationsByUser = async (
  id: string | undefined
): Promise<ReservationToFix[]> => {
  const response = await get(`${endpoints.getFutureReservationsByUser}${id}`, {});
  return response;
};

export const register = async ({
  email,
  password,
  modifiedBy,
}: RegisterUser): Promise<RegisterUser> => {
    const response = await post(`${endpoints.register}`, { email, password, modifiedBy });
    console.log(response);
    return response;
};
export const changePassword = async ({
  id,
  password,
  newPassword,
}: {id: string | undefined, password: string | undefined, newPassword: string | undefined}): Promise<string> => {
    const response = await post(`${endpoints.changePassword}/${id}`, {id,  password, newPassword });
    console.log(response);
    return response;
};

export const loginService = async ({
  email,
  password,
}: LoginUser): Promise<LoginUser> => {
  try {
    const response = await post(`${endpoints.login}`, { email, password });
    return response;
  } catch {
    throw new Error("Failed to login");
  }
};

export const logout = async () => {
  localStorage.removeItem("access_token");
};
