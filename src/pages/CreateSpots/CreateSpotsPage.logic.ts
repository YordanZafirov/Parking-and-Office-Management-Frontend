import { Marker } from 'react-image-marker';
// import { useNavigate } from 'react-router';
import { useQueryClient } from 'react-query';
import { createMultipleSpots } from '../../services/spotService';
import { SpotMarker } from './AddSpotForm/AddSpotForm.static';

function useCreateSpots() {
    // const navigate = useNavigate();
    const query = useQueryClient();

    const handleClear = () => {
        query.setQueryData('markers', []);
    };

    // Function to create spots
    const createSpots = async () => {
        const markers: SpotMarker[] | undefined = query.getQueryData('markers');
        if (markers) {
            const markersJson = { markers };

            const newSpots = await createMultipleSpots(markersJson);
            console.log('input', JSON.stringify(markersJson));
            console.log('result', newSpots);
            return newSpots;
        }
    };

    const handleAddMarker = (marker: Marker) => {
        query.setQueryData('currentMarker', marker);
    };

    return { handleAddMarker, handleClear, createSpots };
}

export { useCreateSpots };
