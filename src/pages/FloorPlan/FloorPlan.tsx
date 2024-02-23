import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateFloorPlan from './CreateFloorPlan/CreateFloorPlan';
// import UpdateFloorPlan from './UpdateFloorPlan/UpdateFloorPlan';
import FloorPlanDetails from './FloorPlanDetails/FloorPlanDetails';
import { getFloorPlans } from '../../services/floorPlanService';
import { FloorPlan as FloorPlanProp } from './FloorPlan.static';
import { useLocation } from 'react-router-dom';

const FloorPlanContainer = styled.div`
    // Add styling as needed
`;

const FloorPlanComponent = () => {
    const [floorPlans, setFloorPlans] = useState<FloorPlanProp[]>([]);
    const location = useLocation();
    const { state } = location;
    const { locationId } = state || {};
    console.log('locationId', locationId);

    useEffect(() => {
        const fetchFloorPlansData = async () => {
            try {
                const fetchedFloorPlans = await getFloorPlans();
                console.log('Fetch all floor plans in useEffect', fetchedFloorPlans);

                if (fetchedFloorPlans && fetchedFloorPlans.length > 0) {
                    const matchingFloorPlan: FloorPlanProp[] = fetchedFloorPlans.filter(
                        (plan) => plan.locationId === locationId,
                    );

                    if (matchingFloorPlan.length > 0) {
                        setFloorPlans(matchingFloorPlan);
                        console.log('matchingFloorPlan', matchingFloorPlan);
                    } else {
                        setFloorPlans([]);
                    }
                } else {
                    setFloorPlans([]);
                }
            } catch (error) {
                console.error('Error fetching floor plans data:', error);
            }
        };

        fetchFloorPlansData();
    }, [locationId]);

    return (
        <FloorPlanContainer>
            <CreateFloorPlan />

            {/* <UpdateFloorPlan floorPlan={floorPlans[0]} /> */}

            <FloorPlanDetails floorPlans={floorPlans} />
        </FloorPlanContainer>
    );
};

export default FloorPlanComponent;
