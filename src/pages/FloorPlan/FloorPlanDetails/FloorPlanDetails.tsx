import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FloorPlanDetailsContainer, HeadingFloorPlan } from './FloorPlanDetails.style';
import { getFloorPlan } from '../../../services/floorPlanService';
import { FloorPlan } from '../FloorPlan.static';
import { BackButton, ListContainer } from '../FloorPlan.style';
import { FaArrowLeft } from 'react-icons/fa';

const FloorPlanDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log('useParams ID:', id);
    const [floorPlan, setFloorPlan] = useState<FloorPlan | null>(null);

    useEffect(() => {
        console.log('Effect is running');
        console.log('ID:', id);
        if (id) {
            getFloorPlan(id)
                .then((data: FloorPlan) => {
                    console.log('Fetched data:', data);
                    setFloorPlan(data);
                })
                .catch((error) => console.error('Error fetching floor plan details:', error));
        }
    }, [id]);

    console.log('Floor Plan State:', floorPlan);

    if (!floorPlan) {
        return <div>Loading...</div>;
    }

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>

            <FloorPlanDetailsContainer>
                <div key={floorPlan.id}>
                    <HeadingFloorPlan>{floorPlan.name}</HeadingFloorPlan>
                    <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
                </div>
            </FloorPlanDetailsContainer>
        </ListContainer>
    );
};

export default FloorPlanDetails;
