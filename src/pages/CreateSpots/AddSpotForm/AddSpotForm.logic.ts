import { useFormik } from 'formik';
import { AddSpotShema, SpotMarker } from './AddSpotForm.static';
import { useEffect } from 'react';
import { Marker } from 'react-image-marker';
import { checkSpot } from '../../../services/spotService';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getSpotTypes } from '../../../services/spotTypeService';
import useToken from '../../../hooks/Token/Token.hook';
import { useSpotsContext } from '../../../context/SpotsContext';

function useAddSpot() {
    const navigate = useNavigate();
    const user = useToken();

    const { markerData, saveNewSpots } = useSpotsContext();

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

        onSubmit: async (values: SpotMarker, { setFieldError, setSubmitting, resetForm }) => {
            console.log('values', values);
            try {
                const marker: Marker | undefined = markerData?.marker;

                console.log('MARKER', marker);

                if (marker) {
                    const newMarker: SpotMarker = {
                        top: marker.top,
                        left: marker.left,
                        name: values.name,
                        description: values.description,
                        spotTypeId: values.spotTypeId,
                        isPermanent: values.isPermanent,
                        floorPlanId: markerData?.floorPlan.id,
                        modifiedBy: user?.id,
                    };
                    console.log('new Marker', newMarker);

                    const spot = await checkSpot(newMarker);

                    if (spot.error) {
                        throw new Error(spot.error);
                    } else {
                        saveNewSpots(newMarker);
                        resetForm();
                        navigate(-1);
                    }
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

const useSpotTypes = () => {
    const { data: spotTypes, isLoading, error, refetch } = useQuery({ queryKey: ['spotTypes'], queryFn: getSpotTypes });
    useEffect(() => {}, [spotTypes]);
    return { spotTypes, isLoading, error, refetch };
};

export { useAddSpot, useSpotTypes };
