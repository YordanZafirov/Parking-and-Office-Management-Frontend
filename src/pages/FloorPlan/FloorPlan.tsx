// FloorPlanComponent.jsx

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import CreateFloorPlan from './CreateFloorPlan/CreateFloorPlan';
import UpdateFloorPlan from './UpdateFloorPlan/UpdateFloorPlan';
import FloorPlanDetailsComponent from './FloorPlanDetailsComponent/FloorPlanDetailsComponent';
import { getFloorPlans } from '../../services/floorPlanService';
import { FloorPlan } from './FloorPlan.static';
import { useLocation } from 'react-router-dom';

const FloorPlanContainer = styled.div`
    // Add styling as needed
`;

const FloorPlanComponent = () => {
    const [floorPlans, setFloorPlans] = useState<FloorPlan[]>([]);
    const location = useLocation();
    const { state } = location;
    const { locationId } = state || {};

    useEffect(() => {
        const fetchFloorPlansData = async () => {
            try {
                // Fetch all floor plans
                const fetchedFloorPlans = await getFloorPlans();

                if (fetchedFloorPlans && fetchedFloorPlans.length > 0) {
                    // Filter the floor plan that matches the locationId
                    const matchingFloorPlan = fetchedFloorPlans.find((plan) => plan.locationId === locationId);

                    if (matchingFloorPlan) {
                        // If a matching floor plan is found, set the floor plan state
                        setFloorPlans([matchingFloorPlan]);
                    } else {
                        // If no matching floor plan is found, render CreateFloorPlan
                        setFloorPlans([]);
                    }
                } else {
                    // If no floor plans are available, render CreateFloorPlan
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

            <UpdateFloorPlan floorPlan={floorPlans[0]} />

            <FloorPlanDetailsComponent floorPlan={floorPlans[0]} />
        </FloorPlanContainer>
    );
};

export default FloorPlanComponent;
