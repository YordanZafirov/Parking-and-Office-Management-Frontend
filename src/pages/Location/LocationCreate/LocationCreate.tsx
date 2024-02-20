import InputField from "../../../components/InputField/InputField";
import { FormStyled } from "../../../components/InputField/InputFieldForm.styled";
import { useCreateLocation } from "./LocationCreate.logic";

export default function LocationCreateForm() {
    const { formik } = useCreateLocation();

    return (
        <FormStyled onSubmit={formik.handleSubmit}>
            <h3 className="form-title">Create New Location</h3>

            <InputField type="name" id="name" name="name" label="Name" placeholder="Please enter location's name" onChange={formik.handleChange} />
            <div className="error-message">{formik.errors.name}</div>

            <InputField type="name" id="city" name="city" label="City" placeholder="Please enter location's city" onChange={formik.handleChange} />
            <div className="error-message">{formik.errors.city}</div>

            <InputField type="name" id="address" name="address" label="Address" placeholder="Please enter location's address" onChange={formik.handleChange} />
            <div className="error-message">{formik.errors.address}</div>

            <InputField type="name" id="imgUrl" name="imgUrl" label="Image" placeholder="Please enter location's address" onChange={formik.handleChange} />
            <div className="error-message">{formik.errors.imgUrl}</div>

            <div>
                <button type="submit">Create</button>
            </div>
        </FormStyled>
    );
}
