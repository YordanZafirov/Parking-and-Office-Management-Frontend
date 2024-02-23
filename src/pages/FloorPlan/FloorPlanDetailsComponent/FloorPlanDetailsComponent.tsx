// FloorPlanDetailsComponent.jsx

import React from 'react';
import styled from 'styled-components';
import { FloorPlan } from '../FloorPlan.static';

const FloorPlanDetailsContainer = styled.div`
    // Add styling as needed
`;

interface FloorPlanDetailsProps {
    floorPlan: FloorPlan;
}

const FloorPlanDetailsComponent: React.FC<FloorPlanDetailsProps> = ({ floorPlan }) => {
    return (
        <FloorPlanDetailsContainer>
            <h2>{floorPlan.name}</h2>
            <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
        </FloorPlanDetailsContainer>
    );
};

export default FloorPlanDetailsComponent;
