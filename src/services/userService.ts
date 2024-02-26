import { LoginUser } from '../pages/Login/Login.static';
import { User } from '../pages/User/UsersPage/UsersPage.static';
import { endpoints } from '../static/endpoints';
import { del, get, patch, post } from './fetchService';

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
export interface ChangePasswordResponse {
    message?: string;
    error?: string;
}
export interface ChangeProfilePictureResponse {
    message?: string;
    error?: string;
}

// Function to get all users
export const getUsers = async (): Promise<User[]> => {
    const response = await get(`${endpoints.user}`, {});
    return response;
};

// Function to get a user by id
export const getUser = async (id: string | undefined): Promise<User> => {
    const response = await get(`${endpoints.user}/${id}`, {});
    return response;
};

// Function to delete a user
export const deleteUser = async (id: string): Promise<User> => {
    const response = await del(`${endpoints.user}/${id}`, {});
    return response;
};

// Function to get all past reservations by user
// TODO
export const getPastReservationsByUser = async (id: string | undefined): Promise<ReservationToFix[]> => {
    const response = await get(`${endpoints.getPastReservationsByUser}${id}`, {});
    return response;
};

// Function to get all current reservations by user
export const getCurrentReservationsByUser = async (id: string | undefined): Promise<ReservationToFix[]> => {
    const response = await get(`${endpoints.getCurrentReservationsByUser}${id}`, {});
    return response;
};

// Function to get all future reservations by user
export const getFutureReservationsByUser = async (id: string | undefined): Promise<ReservationToFix[]> => {
    const response = await get(`${endpoints.getFutureReservationsByUser}${id}`, {});
    return response;
};

// Function to get all reservations by user
export const register = async ({ email, password, modifiedBy }: RegisterUser): Promise<RegisterUser> => {
    const response = await post(`${endpoints.register}`, { email, password, modifiedBy });
    console.log(response);
    return response;
};

// Function to change password
export const changePassword = async ({
    id,
    password,
    newPassword,
}: {
    id: string | undefined;
    password: string | undefined;
    newPassword: string | undefined;
}): Promise<ChangePasswordResponse> => {
    const response = await patch(`${endpoints.changePassword}/${id}`, { id, password, newPassword });
    console.log(response);
    return response;
};

// Function to change profile picture
export const changeProfilePicture = async ({
    id,
    imgUrl,
}: {
    id: string | undefined;
    imgUrl: string | undefined;
}): Promise<ChangeProfilePictureResponse> => {
    const response = await patch(`${endpoints.changeProfilePicture}/${id}`, { id, imgUrl });
    return response;
};

// Function to delete a reservation
export const loginService = async ({ email, password }: LoginUser): Promise<LoginUser> => {
    try {
        const response = await post(`${endpoints.login}`, { email, password });
        return response;
    } catch {
        throw new Error('Failed to login');
    }
};

// Function to delete a reservation
export const logout = async () => {
    localStorage.removeItem('access_token');
};
