import React from 'react';
import styled from 'styled-components';
import { FloorPlan as FloorPlanProp } from '../FloorPlan.static';

const FloorPlanDetailsContainer = styled.div`
    padding: 15px;
`;

interface FloorPlansDetailsProps {
    floorPlans: FloorPlanProp[];
}

const FloorPlanDetails: React.FC<FloorPlansDetailsProps> = ({ floorPlans }) => {
    return (
        <FloorPlanDetailsContainer>
            {floorPlans.length > 0 ? (
                floorPlans.map((floorPlan: FloorPlanProp) => (
                    <div key={floorPlan.id}>
                        <h2>{floorPlan.name}</h2>
                        <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
                    </div>
                ))
            ) : (
                <div>No Floor Plan available</div>
            )}
        </FloorPlanDetailsContainer>
    );
};

export default FloorPlanDetails;
