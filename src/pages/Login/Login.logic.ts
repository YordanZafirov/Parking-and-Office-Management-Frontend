import { useFormik } from "formik";
import { LoginShema, User } from "./Login.static";

const login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      error: "",
    },
    validationSchema: LoginShema,

    onSubmit: (values: User) => {
      console.log(values);
    },
  });
  return { formik };
};

export default login;
