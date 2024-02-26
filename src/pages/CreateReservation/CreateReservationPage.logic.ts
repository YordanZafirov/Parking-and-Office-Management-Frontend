import { useQuery } from 'react-query';
import { getAllBySpotTypeAndLocation } from '../../services/floorPlanService';
import { useLocation } from 'react-router';
import { useState } from 'react';
import { getFreeSpotsBySpotTypeAndLocation } from '../../services/spotService';
import { DateRangeOutput } from './Calendar/Calendar.static';
import { FloorPlan } from '../FloorPlan/FloorPlan.static';
import { CustomSpotMarker } from './SpotMarker/SpotMarker.static';

function useShowSpots() {
    const location = useLocation();
    const currentLocation = location.state.currentLocation;
    const selectedSpotType = location.state.selectedSpotType;
    const [spots, setSpots] = useState<CustomSpotMarker[]>([]);
    const [currentFloorPlan, setCurrentFloorPlan] = useState<FloorPlan>();

    const [showSpots, setShowSpots] = useState<boolean>(false);

    function toggleSpots() {
        setShowSpots(!showSpots);
    }

    const [calendarData, setCalendarData] = useState<DateRangeOutput>();


    // Function to handle the data from the calendar
    function handleDataFromCalendar(data: DateRangeOutput) {
        setCalendarData(data);
    }

    const { floorPlans, isLoading, error } = useFloorPlansByLocation(selectedSpotType.id, currentLocation.id);

    // Function to show the floor plan and the spots
    const showPlan = async (floorPlan: FloorPlan) => {

        setCurrentFloorPlan(floorPlan);
        if (floorPlan && calendarData) {

            const data = await getFreeSpotsBySpotTypeAndLocation({
                floorPlanId: floorPlan.id!,
                spotTypeId: selectedSpotType.id,
                start: calendarData.startDate,
                end: calendarData.endDate,
            });

            if (data) {
                console.log('data', data);

                const outputSpots = data.map((spot: CustomSpotMarker) => {
                    spot.spotType = selectedSpotType.name;
                    spot.period = calendarData;
                    return spot;
                });

                setSpots(outputSpots);
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
        selectedSpotType,
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
