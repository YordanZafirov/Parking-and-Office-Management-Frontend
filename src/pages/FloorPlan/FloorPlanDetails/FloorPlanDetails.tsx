import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FloorPlanDetailsContainer, HeadingFloorPlan, ImageStyled } from './FloorPlanDetails.style';
import { getFloorPlan } from '../../../services/floorPlanService';
import { FloorPlan } from '../FloorPlan.static';
import CustomMarker from '../../CreateSpots/CustomSpotMarker/CustomSpotMarker';
import ImageMarker from 'react-image-marker';
import Loader from '../../../components/loader/Loader';
import { BackButton, ListContainer } from '../FloorPlan.style';
import { FaArrowLeft } from 'react-icons/fa';
import { getSpotsByFloorPlanId } from '../../../services/spotService';
import { useQuery } from 'react-query';

const FloorPlanDetails = () => {
    const navigate = useNavigate();

    const { id } = useParams();
    console.log('useParams ID:', id);
    const [floorPlan, setFloorPlan] = useState<FloorPlan | null>(null);
    const { data: spotsByFloorPlan, error, isLoading } = useQuery('spotsByFloorPlan', () => getSpotsByFloorPlanId(id!));

    useEffect(() => {
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

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Floor Plan Details page</p>;
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
                    <ImageStyled>
                        {floorPlan && spotsByFloorPlan && (
                            <ImageMarker
                                src={floorPlan.imgUrl!}
                                markers={spotsByFloorPlan}
                                markerComponent={CustomMarker}
                            />
                        )}
                    </ImageStyled>
                </div>
            </FloorPlanDetailsContainer>
        </ListContainer>
    );
};

export default FloorPlanDetails;
