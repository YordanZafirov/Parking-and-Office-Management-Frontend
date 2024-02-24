import React from 'react';
import { FloorPlan as FloorPlanProp } from '../FloorPlan.static';
import { FloorPlanDetailsContainer, HeadingFloorPlan } from './FloorPlanDetails.style';

interface FloorPlansDetailsProps {
    floorPlans: FloorPlanProp[];
}

const FloorPlanDetails: React.FC<FloorPlansDetailsProps> = ({ floorPlans }) => {
    return (
        <FloorPlanDetailsContainer>
            {floorPlans.length > 0 ? (
                floorPlans.map((floorPlan: FloorPlanProp) => (
                    <div key={floorPlan.id}>
                        <HeadingFloorPlan>{floorPlan.name}</HeadingFloorPlan>
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
