import { useEffect, useState } from 'react';
import { deleteFloorPlan, getFloorPlans } from '../../services/floorPlanService';
import { FloorPlan as FloorPlanProp } from './FloorPlan.static';
import { useLocation, useNavigate } from 'react-router-dom';

function useFloorPlan() {
    const [floorPlan, setFloorPlan] = useState<FloorPlanProp[]>([]);
    const location = useLocation();
    const { state } = location;
    const { locationId } = state || {};
    const navigate = useNavigate();

    const [selectedFloorPlanIdForDelete, setSelectedFloorPlanIdForDelete] = useState<string | null>(null);

    useEffect(() => {
        const fetchFloorPlansData = async () => {
            try {
                const fetchedFloorPlans = await getFloorPlans();

                if (fetchedFloorPlans && fetchedFloorPlans.length > 0) {
                    const matchingFloorPlan: FloorPlanProp[] = fetchedFloorPlans.filter(
                        (plan) => plan.locationId === locationId,
                    );

                    if (matchingFloorPlan.length > 0) {
                        setFloorPlan(matchingFloorPlan);
                    } else {
                        setFloorPlan([]);
                    }
                } else {
                    setFloorPlan([]);
                }
            } catch (error) {
                console.error('Error fetching floor plans data:', error);
            }
        };

        fetchFloorPlansData();
    }, [locationId, navigate]);

    const onDeleteFloorPlan = async (floorPlanId: string) => {
        try {
            console.log('Deleting floor plan...');
            await deleteFloorPlan(floorPlanId);
            console.log('Floor plan deleted successfully');
        } catch (error) {
            console.error('Error deleting floor plan:', error);
        }
    };

    const onDeleteClick = (floorPlanId: string) => {
        setSelectedFloorPlanIdForDelete(floorPlanId);
    };

    const onDeleteConfirm = async () => {
        if (selectedFloorPlanIdForDelete) {
            await onDeleteFloorPlan(selectedFloorPlanIdForDelete);
            setSelectedFloorPlanIdForDelete(null);
        }
    };

    return { floorPlan, onDeleteClick, onDeleteConfirm };
}

export default useFloorPlan;
