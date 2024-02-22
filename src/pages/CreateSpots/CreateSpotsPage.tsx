import ImageMarker, { Marker } from 'react-image-marker';
import { useNavigate } from 'react-router';
import { useAddSpot } from './AddSpotForm/AddSpotForm.logic';
import CustomMarker from './CustomSpotMarker/CustomSpotMarker';
import { useLocation } from 'react-router-dom';
import { CustomSpotMarker } from './AddSpotForm/AddSpotForm.static';
import { ButtonsContainer, DivFlexStyled } from './CreateSpotsPage.style';
import { useCreateSpots } from './CreateSpotsPage.logic';
import { BaseButton, Container } from '../../components/CommonStyledElements';

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
                <BaseButton className="remove-btn" onClick={handleClear}>
                    Clear All Spots
                </BaseButton>
                <BaseButton className="create-btn" onClick={createSpots}>
                    Save All Spots
                </BaseButton>
            </ButtonsContainer>
        </Container>
    );
}
