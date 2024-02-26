import React from 'react';
import { BaseButton } from '../../../components/CommonStyledElements';
import { FormStyled } from '../../../components/InputField/Form.style';
import ImageInputField from '../../../components/InputField/ImageInputField';
import InputField from '../../../components/InputField/InputField';
import { FloorPlan } from '../FloorPlan.static';
import { useUpdateFloorPlan } from './UpdateFloorPlan.logic';
import { useParams } from 'react-router-dom';

interface UpdateFloorPlanProps {
    floorPlan: FloorPlan;
}

const UpdateFloorPlan: React.FC<UpdateFloorPlanProps> = ({ floorPlan }) => {
    const { floorPlanId } = useParams(); // Get floorPlanId from URL params
    const { formik, setImageFile } = useUpdateFloorPlan(floorPlanId); // Pass floorPlanId to useUpdateFloorPlan

    return (
        <FormStyled onSubmit={formik.handleSubmit}>
            <h3 className="form-title">Update Floor Plan</h3>

            <InputField
                type="name"
                id="name"
                name="name"
                label="Name"
                placeholder="Please enter location's name"
                onChange={formik.handleChange}
                value={floorPlan.name}
            />
            {formik.errors.name && formik.touched.name && <div className="error-message">{formik.errors.name}</div>}

            <ImageInputField
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
            {formik.errors.imgUrl && formik.touched.imgUrl && (
                <div className="error-message">{formik.errors.imgUrl}</div>
            )}

            <BaseButton className="update-btn" type="submit">
                Update
            </BaseButton>

            {/* Display floor plan image */}
            <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
        </FormStyled>
    );
};

export default UpdateFloorPlan;
