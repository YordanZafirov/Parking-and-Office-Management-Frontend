import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { LocationCreate, LocationCreateShema } from "./LocationCreate.static";
import { addLocation } from "../../../services/locationService";
import useToken from "../../../hooks/Token/Token.hook";

function useCreateLocation() {
    const navigate = useNavigate();

    const decodedToken = useToken();
    console.log("decoded token", decodedToken);

    const formik = useFormik({
        initialValues: {
            name: "",
            city: "",
            address: "",
            imgUrl: "",
            modifiedBy: decodedToken?.sub,
            error: "",
        },
        validationSchema: LocationCreateShema,

        onSubmit: async (values: LocationCreate, { setFieldError, setSubmitting, resetForm }) => {
            try {
                console.log("values", values);
                const newObj = {
                    name: values.name,
                    city: values.city,
                    address: values.address,
                    imgUrl: values.imgUrl,
                    modifiedBy: decodedToken?.sub,
                };

                const createdLocation = await addLocation(newObj);

                if (createdLocation.error) {
                    throw new Error(createdLocation.error);
                } else {
                    alert("Location created successfully!");
                    resetForm();
                    navigate("/location");
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : "An unexpected error occurred.";

                setFieldError("error", errorMessage);
                setSubmitting(false);
            }
        },
    });

    console.log("decoded tokeneeeeeee", decodedToken);

    return { formik };
}

export { useCreateLocation };
