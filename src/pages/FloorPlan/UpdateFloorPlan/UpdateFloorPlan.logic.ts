// UpdateFloorPlan.logic.ts

import { useFormik } from 'formik';
import { useNavigate, useLocation } from 'react-router-dom';
import useToken from '../../../hooks/Token/Token.hook';
import { useState } from 'react';
import { uploadImage } from '../../../services/imageService';
import { updateFloorPlan } from '../../../services/floorPlanService';
import { FloorPlan, FloorPlanCreateShema } from '../FloorPlan.static';

function useUpdateFloorPlan() {
    const [imageFile] = useState<File | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const { locationId } = location.state || {};

    const decodedToken = useToken();

    const formik = useFormik({
        initialValues: {
            name: '',
            locationId: '',
            imgUrl: '',
            modifiedBy: '',
            error: '',
        },
        validationSchema: FloorPlanCreateShema,

        onSubmit: async (values: FloorPlan, { setFieldError, setSubmitting, resetForm }) => {
            const newObj = {
                name: values.name,
                locationId: locationId,
                imgUrl: values.imgUrl,
                modifiedBy: decodedToken?.id,
            };
            try {
                if (imageFile) {
                    const imageUrl = await uploadImage(imageFile);
                    newObj.imgUrl = imageUrl;
                }

                const updatedFloorPlan = await updateFloorPlan(newObj);

                if (updatedFloorPlan.error) {
                    throw new Error(updatedFloorPlan.error);
                } else {
                    alert('Floor Plan created successfully!');
                    resetForm();
                    navigate('/admin');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik };
}

export { useUpdateFloorPlan };
