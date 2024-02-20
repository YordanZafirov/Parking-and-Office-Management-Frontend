import { User } from "../pages/Login/Login.static";
import { endpoints } from "../static/endpoints";
import { post } from "./fetchService";

// Function to register user
export const register = async ({ email, password }: User): Promise<User> => {
  const response = await post(`${endpoints.register}`, { email, password });
  return response;
};

// Function to login user
export const loginService = async ({
  email,
  password,
}: User): Promise<User> => {
  const response = await post(`${endpoints.login}`, { email, password });
  return response;
};

// Function to logout user
export const logout = async () => {
  localStorage.removeItem("access_token");
};
