import { useFormik } from 'formik';
import { AddSpotShema, CustomSpotMarker } from './AddSpotForm.static';
import { useState } from 'react';
import { Marker } from 'react-image-marker';
import { checkSpot } from '../../../services/spotService';
import { useNavigate } from 'react-router';
import { useQueryClient } from 'react-query';

function useAddSpot() {
    const [markers, setMarkers] = useState<Array<CustomSpotMarker>>([]);
    const navigate = useNavigate();
    const query = useQueryClient();

    const formik = useFormik({
        initialValues: {
            top: 0,
            left: 0,
            name: '',
            description: '',
            isPermanent: false,
            spotTypeId: '',
            floorPlanId: '',
            error: '',
        },
        validationSchema: AddSpotShema,

        onSubmit: async (values: CustomSpotMarker, { setFieldError, setSubmitting, resetForm }) => {
            console.log('values', values);
            try {
                const marker: Marker | undefined = query.getQueryData('currentMarker');
                if (marker) {
                    const newMarker: CustomSpotMarker = {
                        top: marker.top,
                        left: marker.left,
                        name: values.name,
                        description: values.description,
                        spotTypeId: 'ea3e6c4d-d1c0-4d8b-8ad7-c6d3419c27ae',
                        isPermanent: values.isPermanent,
                        floorPlanId: 'f3624366-89e0-494e-91bb-37f57b211665',
                        modifiedBy: '3e58c232-eb64-493a-aeac-e171ac6a47c1',
                    };
                    console.log('new Marker', newMarker);

                    const spot = await checkSpot(newMarker);

                    if (spot.error) {
                        throw new Error(spot.error);
                    } else {
                        query.setQueryData<CustomSpotMarker[]>('markers', (prevMarkers) => {
                            if (!prevMarkers) {
                                return [newMarker];
                            }
                            return [...prevMarkers, newMarker];
                        });
                        setMarkers([...markers, newMarker]);
                    }
                }
                resetForm();
                navigate(-1);
            } catch (e) {
                const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';

                setFieldError('error', errorMessage);
                setSubmitting(false);
            }
        },
    });
    const data: CustomSpotMarker[] | undefined = query.getQueryData('markers');

    return { formik, markers: data };
}

export { useAddSpot };
