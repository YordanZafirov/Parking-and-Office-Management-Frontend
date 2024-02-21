import ImageMarker, { Marker } from 'react-image-marker';
import { useNavigate } from 'react-router';
import { useAddSpot } from './AddSpotForm/AddSpotForm.logic';
import {} from './AddSpotForm/AddSpotForm.style';
import CustomMarker from './CustomSpotMarker/CustomSpotMarker';
import { useLocation } from 'react-router-dom';
import { CustomSpotMarker } from './AddSpotForm/AddSpotForm.static';
import { Button, ButtonsContainer, Container, DivFlexStyled } from './CreateSpotsPage.style';
import { useCreateSpots } from './CreateSpotsPage.logic';

const floorPlan = 'https://parking-and-office-management.s3.amazonaws.com/1708009292684-office-planning-software.png';

export default function CreateSpots() {
    const navigate = useNavigate();
    const location = useLocation();
    const { handleAddMarker, handleClear, createSpots } = useCreateSpots();
    const { markers } = useAddSpot();
    let spots: CustomSpotMarker[] = [];
    markers ? (spots = markers) : [];

    return (
        <Container className="App">
            <DivFlexStyled className="frame">
                <ImageMarker
                    src={floorPlan}
                    markers={spots}
                    onAddMarker={(marker: Marker) => {
                        navigate('/spot/create', { state: { background: location } });
                        handleAddMarker(marker);
                    }}
                    markerComponent={CustomMarker}
                />
            </DivFlexStyled>
            <ButtonsContainer>
                <Button className="remove-btn" onClick={handleClear}>
                    Clear All Spots
                </Button>
                <Button className="create-btn" onClick={createSpots}>
                    Save All Spots
                </Button>
            </ButtonsContainer>
        </Container>
    );
}
