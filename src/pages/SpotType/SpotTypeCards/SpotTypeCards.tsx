import { useNavigate } from 'react-router-dom';
import { SpotTypeContainer, SpotTypeImage, SpotTypeParagraph, SpotTypeImageContainer } from './SpotTypeCards.style';
import { BaseButton, Container, PageTitle, StyledCard } from '../../../components/CommonStyledElements';
import { SpotTypeInterface } from './SpotTypeCards.static';
import { LocationInterface } from '../SpotType.static';
import { route } from '../../../static/routes';
import officeDeskPhoto from '../../../assets/office-desk.jpg';
import conferenceRoom from '../../../assets/conference-room.jpg';
import phoneBooth from '../../../assets/phone-booth.jpg';
import parkingSpot from '../../../assets/parking-spot.jpg';

interface Location {
    singleLocation: LocationInterface | undefined;
    spotTypeData: SpotTypeInterface[] | undefined;
}

const SpotTypeCards: React.FC<Location> = ({ singleLocation, spotTypeData }) => {
    const navigate = useNavigate();

    const renderImage = (name: string) => {
        switch (name) {
            case 'Office desk':
                return <SpotTypeImage src={officeDeskPhoto} alt="Office desk" />;
            case 'Conference room':
                return <SpotTypeImage src={conferenceRoom} alt="Conference room" />;
            case 'Phone booth':
                return <SpotTypeImage src={phoneBooth} alt="Phone booth" />;
            case 'Parking spot':
                return <SpotTypeImage src={parkingSpot} alt="Parking spot" />;
            default:
                return null; // Return null if no matching name is found
        }
    };
    return (
        <Container>
            {!singleLocation && <PageTitle>The chosen location is missing</PageTitle>}
            {!spotTypeData ? (
                <PageTitle>Loading spot types...</PageTitle>
            ) : (
                <>
                    <PageTitle>Reserve your spot at {singleLocation?.name}</PageTitle>
                    <SpotTypeContainer>
                        {spotTypeData.map((spotType) => (
                            <BaseButton
                                key={spotType.id}
                                className="spot-type-card"
                                onClick={() => {
                                    navigate(`${route.createReservation}`, {
                                        state: { currentLocation: singleLocation, selectedSpotType: spotType },
                                    });
                                }}
                            >
                                <StyledCard>
                                    <SpotTypeParagraph>{spotType.name}</SpotTypeParagraph>
                                    <SpotTypeImageContainer>{renderImage(spotType.name)}</SpotTypeImageContainer>
                                </StyledCard>
                            </BaseButton>
                        ))}
                    </SpotTypeContainer>
                </>
            )}
        </Container>
    );
};

export default SpotTypeCards;
