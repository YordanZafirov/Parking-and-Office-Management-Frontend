import { useFormik } from 'formik';
import { AddSpotShema, SpotMarker } from './AddSpotForm.static';
import { useState } from 'react';
import { Marker } from 'react-image-marker';
import { checkSpot } from '../../../services/spotService';
import { useNavigate } from 'react-router';
import { useQuery, useQueryClient } from 'react-query';
import { getSpotTypes } from '../../../services/spotTypeService';
import useToken from '../../../hooks/Token/Token.hook';

function useAddSpot() {
    const [markers, setMarkers] = useState<Array<SpotMarker>>([]);
    const navigate = useNavigate();
    const query = useQueryClient();

    const user = useToken();

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

        // Function to handle the form submission
        onSubmit: async (values: SpotMarker, { setFieldError, setSubmitting, resetForm }) => {
            console.log('values', values);
            try {
                const marker: Marker | undefined = query.getQueryData('currentMarker');
                if (marker) {
                    const newMarker: SpotMarker = {
                        top: marker.top,
                        left: marker.left,
                        name: values.name,
                        description: values.description,
                        spotTypeId: values.spotTypeId,
                        isPermanent: values.isPermanent,
                        floorPlanId: 'f3624366-89e0-494e-91bb-37f57b211665', //TODO GET FLOOR PLAN ID
                        modifiedBy: user?.id,
                    };
                    console.log('new Marker', newMarker);

                    const spot = await checkSpot(newMarker);

                    if (spot.error) {
                        throw new Error(spot.error);
                    } else {
                        query.setQueryData<SpotMarker[]>('markers', (prevMarkers) => {
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
    const data: SpotMarker[] | undefined = query.getQueryData('markers');

    return { formik, markers: data };
}

const useSpotTypes = () => {
    const { data: spotTypes, isLoading, error, refetch } = useQuery({ queryKey: ['spotTypes'], queryFn: getSpotTypes });
    return { spotTypes, isLoading, error, refetch };
};

export { useAddSpot, useSpotTypes };
