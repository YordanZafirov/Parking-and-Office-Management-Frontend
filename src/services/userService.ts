import { User } from "../pages/Login/Login.static";
import { endpoints } from "../static/endpoints";
import { del, get, post } from "./fetchService";

export const getUsers = async (): Promise<User[]> => {
  const response = await get(`${endpoints.user}`,{});
  return response;
}
export const getUser = async (id: string): Promise<User> => {
  const response = await get(`${endpoints.user}/${id}`,{});
  return response;
}
export const deleteUser = async (id: string): Promise<User> => {
  const response = await del(`${endpoints.user}/${id}`,{});
  return response;
}

export const register = async ({ email, password }: User): Promise<User> => {
  try {
    const response = await post(`${endpoints.register}`, { email, password });
    return response;
  } catch {
    throw new Error("Failed to register");
  }
};

export const loginService = async ({
  email,
  password,
}: User): Promise<User> => {
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

