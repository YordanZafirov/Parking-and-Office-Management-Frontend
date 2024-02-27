import ImageMarker, { Marker } from 'react-image-marker';
import { useNavigate } from 'react-router';
import { useAddSpot } from './AddSpotForm/AddSpotForm.logic';
import CustomMarker from './CustomSpotMarker/CustomSpotMarker';
import { useLocation } from 'react-router-dom';
import { SpotMarker } from './AddSpotForm/AddSpotForm.static';
import { DivFlexStyled } from './CreateSpotsPage.style';
import { useCreateSpots } from './CreateSpotsPage.logic';
import { BaseButton, Container, FormButtonsContainer } from '../../components/CommonStyledElements';
import { route } from '../../static/routes';

const floorPlan =
    'https://parking-and-office-management.s3.amazonaws.com/1708921481292-YARA OFFICE VARNA _lighter_2nd.jpg';

export default function CreateSpots() {
    const navigate = useNavigate();
    const location = useLocation();
    const { handleAddMarker, handleClear, createSpots } = useCreateSpots();
    const { markers } = useAddSpot();
    let spots: SpotMarker[] = [];
    markers ? (spots = markers) : [];

    return (
        <Container className="App">
            <DivFlexStyled className="frame">
                <ImageMarker
                    src={floorPlan}
                    markers={spots}
                    onAddMarker={(marker: Marker) => {
                        navigate(`${route.createSpot}/create`, { state: { background: location } });
                        handleAddMarker(marker);
                    }}
                    markerComponent={CustomMarker}
                />
            </DivFlexStyled>
            <FormButtonsContainer>
                <BaseButton className="remove-btn" onClick={handleClear}>
                    Clear All Spots
                </BaseButton>
                <BaseButton className="create-btn" onClick={createSpots}>
                    Save All Spots
                </BaseButton>
            </FormButtonsContainer>
        </Container>
    );
}
