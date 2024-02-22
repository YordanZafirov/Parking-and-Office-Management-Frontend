import { useQuery } from 'react-query';
import { FloorPlan, getAllBySpotTypeAndLocation } from '../../services/floorPlanService';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { CustomSpotMarker } from '../CreateSpots/AddSpotForm/AddSpotForm.static';
import { getAllBySpotTypeAndFloorPlan } from '../../services/spotService';

function useShowSpots() {
    const location = useLocation();
    const currentLocation = location.state.currentLocation;
    const selectedSpotType = location.state.selectedSpotType;
    const [spots, setSpots] = useState<CustomSpotMarker[]>([]);
    const [currentFloorPlan, setCurrentFloorPlan] = useState<FloorPlan>();

    const [showModal, setShowModal] = useState<boolean>(false);

    function toggleModal() {
        setShowModal(!showModal);
    }

    const { floorPlans, isLoading, error } = useFloorPlansByLocation(selectedSpotType, currentLocation.id);

    console.log('loc', currentLocation);
    console.log('st', selectedSpotType);
    console.log('fp', floorPlans);

    const showPlan = async (floorPlan: FloorPlan) => {
        console.log("FP", floorPlan.id);
        
        setCurrentFloorPlan(floorPlan);
        const data = await getAllBySpotTypeAndFloorPlan({ floorPlanId: floorPlan.id!, spotTypeId: selectedSpotType });

        if (data) {
            console.log('data', data);
            setSpots(data);
            toggleModal();
        }
        useFloorPlansByLocation

        console.log('spots', spots);
    };
    return { isLoading, error, floorPlans, showPlan, spots, showModal, currentFloorPlan };
}

const useFloorPlansByLocation = (spotTypeId: string, locationId: string) => {
    const {
        data: floorPlans,
        isLoading,
        error,
    } = useQuery(['floorPlans', spotTypeId, locationId], () => {
        if (spotTypeId && locationId) {
            return getAllBySpotTypeAndLocation(spotTypeId, locationId);
        }
    });
    return { floorPlans, isLoading, error };
};

// const useSpotsByFloorPlan = ({ floorPlanId, spotTypeId }: { floorPlanId: string; spotTypeId: string }) => {
//     const {
//         data: spots,
//         isLoading,
//         error,
//     } = useQuery(['spots', floorPlanId, spotTypeId], () => {
//         if (spotTypeId && floorPlanId) {
//             return getAllBySpotTypeAndFloorPlan({ floorPlanId, spotTypeId });
//         }
//     });
//     return { spots, isLoading, error };
// };

export { useShowSpots };
