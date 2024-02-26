import { useQuery } from 'react-query';
import { getAllBySpotTypeAndLocation } from '../../services/floorPlanService';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { SpotMarker } from '../CreateSpots/AddSpotForm/AddSpotForm.static';
import { getFreeSpotsBySpotTypeAndLocation } from '../../services/spotService';
import { DateRangeOutput } from './Calendar/Calendar.static';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';

function useShowSpots() {
    const location = useLocation();
    const currentLocation = location.state.currentLocation;
    const selectedSpotType = location.state.selectedSpotType;
    const [spots, setSpots] = useState<SpotMarker[]>([]);
    const [currentFloorPlan, setCurrentFloorPlan] = useState<FloorPlan>();

    const [showSpots, setShowSpots] = useState<boolean>(false);

    function toggleSpots() {
        setShowSpots(!showSpots);
    }

    const [calendarData, setCalendarData] = useState<DateRangeOutput>();

    function handleDataFromCalendar(data: DateRangeOutput) {
        setCalendarData(data);
        console.log('DATA', data);
    }

    const { floorPlans, isLoading, error } = useFloorPlansByLocation(selectedSpotType, currentLocation.id);

    const showPlan = async (floorPlan: FloorPlan) => {
        console.log('FP', floorPlan.id);

        setCurrentFloorPlan(floorPlan);
        if (floorPlan && calendarData) {
            console.log('1', floorPlan);
            console.log('2', calendarData);

            const data = await getFreeSpotsBySpotTypeAndLocation({
                floorPlanId: floorPlan.id!,
                spotTypeId: selectedSpotType,
                start: calendarData.startDate,
                end: calendarData.endDate,
            });

            if (data) {
                console.log('data', data);
                setSpots(data);
                if (!showSpots) {
                    toggleSpots();
                }
            }
        }
    };

    return {
        isLoading,
        error,
        floorPlans,
        showPlan,
        spots,
        showSpots,
        currentFloorPlan,
        handleDataFromCalendar,
        calendarData,
    };
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
