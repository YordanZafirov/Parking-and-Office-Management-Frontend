import { User } from "../pages/Login/Login.static";
import { endpoints } from "../static/endpoints";
import { post } from "./fetchService";

// Function to register user
export const register = async ({ email, password }: User): Promise<User> => {
  try {
    const response = await post(`${endpoints.register}`, { email, password });
    return response;
  } catch {
    throw new Error("Failed to register");
  }
};

// Function to login user
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

// Function to logout user
export const logout = async () => {
  localStorage.removeItem("access_token");
};
