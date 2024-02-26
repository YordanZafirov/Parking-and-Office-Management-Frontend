import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { LocationCreate, LocationCreateShema } from './LocationCreate.static';
import { addLocation } from '../../services/locationService';
import useToken from '../../hooks/Token/Token.hook';
import { useState } from 'react';
import { uploadImage } from '../../services/imageService';

function useCreateLocation() {
    const [imageFile, setImageFile] = useState<File | null>(null);
    const navigate = useNavigate();

    const decodedToken = useToken();

    const formik = useFormik({
        initialValues: {
            name: '',
            city: '',
            address: '',
            imgUrl: '',
            modifiedBy: '',
            error: '',
        },
        validationSchema: LocationCreateShema,

        // Function to handle the form submission
        onSubmit: async (values: LocationCreate, { setFieldError, setSubmitting, resetForm }) => {
            const newObj = {
                name: values.name,
                city: values.city,
                address: values.address,
                imgUrl: values.imgUrl,
                modifiedBy: decodedToken?.id,
            };
            try {
                if (imageFile) {
                    const imageUrl = await uploadImage(imageFile);
                    newObj.imgUrl = imageUrl;
                }
                const createdLocation = await addLocation(newObj);

                if (createdLocation.error) {
                    throw new Error(createdLocation.error);
                } else {
                    alert('Location created successfully!');
                    resetForm();
                    navigate('/');
                }
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });

    return { formik, imageFile, setImageFile };
}

export { useCreateLocation };
