import { useFormik } from "formik";
import { LoginShema, User } from "./Login.static";
import { useAuth } from "../../context/AuthContext";


const login = () => {
  const { loginUser } = useAuth();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      error: "",
    },
    validationSchema: LoginShema,

    onSubmit: (values: User) => {
      try{
        loginUser(values);
      } catch (error) {
        console.error("Error logging in:", error);
        formik.setFieldValue("error", error.message);
      }
    },
  });
  return { formik };
};

export default login;
