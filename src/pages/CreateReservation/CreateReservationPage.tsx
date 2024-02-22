import ImageMarker from 'react-image-marker';
import { BaseButton, Container } from '../../components/CommonStyledElements';
import { useShowSpots } from './CreateReservationPage.logic';
import { FloorPlan } from '../../services/floorPlanService';
import Loader from '../../components/loader/Loader';
import { LocationImage } from '../Home/LocationChocie/LocationChoice.style';
import { Card, ImageContainer } from './CreateReservationPage.style';
import { DivFlexStyled } from '../CreateSpots/CreateSpotsPage.style';
import SpotInfo from './SpotInfo/SpotInfo';

export default function CreateReservation() {
    const { isLoading, error, floorPlans, showPlan, spots, showModal, currentFloorPlan } = useShowSpots();

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <p>Error at Create reservation page</p>;
    }

    return (
        <Container className="App">
            <DivFlexStyled>
                {floorPlans?.map((floorPlan: FloorPlan) => {
                    return (
                        <BaseButton
                            onClick={() => {
                                showPlan(floorPlan);
                            }}
                        >
                            <Card key={floorPlan.id}>
                                <LocationImage src={floorPlan.imgUrl} alt="floor-plan-image" />
                                <h3>{floorPlan.name}</h3>
                            </Card>
                        </BaseButton>
                    );
                })}
            </DivFlexStyled>
            {showModal && currentFloorPlan && spots && (
                <ImageContainer>
                    <ImageMarker src={currentFloorPlan.imgUrl} markers={spots} markerComponent={SpotInfo} />
                </ImageContainer>
            )}
        </Container>
    );
}
