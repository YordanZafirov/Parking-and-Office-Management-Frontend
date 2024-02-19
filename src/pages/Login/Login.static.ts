import * as Yup from "yup";

export interface User {
  email: string;
  password: string;
  error?: string;
}

export const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email"
    )
    .required("Required"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .max(32, "Password is too long - should be 32 chars maximum.")
    .required("Required"),
});
