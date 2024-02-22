import { useNavigate } from "react-router";
import Modal from "../../../components/Modal/Modal";
import useChangeProfilePicture from "./ChangeProfilePictureForm.logic";
import { BaseButton } from "../../../components/CommonStyledElements";
import { StyledProfilePictureForm } from "./ChangeProfilePictureForm.styles";
import InputField from "../../../components/InputField/InputField";

const ChangeProfilePictureForm = () => {
    const { formik, setImageFile } = useChangeProfilePicture();
    const navigate = useNavigate();

    return (
        <Modal>
            <StyledProfilePictureForm onSubmit={formik.handleSubmit}>
                <BaseButton type="button" className="close-btn" onClick={() => navigate(-1)}>
                    Close
                </BaseButton>
                <h2 className="form-title">Change Profile Picture</h2>
                
                <InputField
                type="file"
                id="imgUrl"
                name="imgUrl"
                label="Image"
                placeholder="Please enter location's image"
                onChange={(event) => {
                    const file = event.currentTarget.files?.[0] || null;
                    setImageFile(file);
                    formik.handleChange(event);
                }}
            />
                {formik.errors.imgUrl && formik.touched.imgUrl ? (
                    <div>{formik.errors.imgUrl}</div>
                ) : null}
                <button type="submit">Change Profile Picture</button>
                {formik.errors.error ? <div>{formik.errors.error}</div> : null}
            </StyledProfilePictureForm>
        </Modal>
    );
};

export default ChangeProfilePictureForm;