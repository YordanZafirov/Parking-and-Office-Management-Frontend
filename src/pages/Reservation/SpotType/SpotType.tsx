import { useNavigate } from 'react-router-dom';
import { SpotTypeContainer, SpotTypeCard, SpotTypeImage } from './SpotType.style';
import { BaseButton, Container, PageTitle } from '../../../components/CommonStyledElements';
import { SpotTypeInterface } from './SpotType.static';
import { LocationInterface } from '../Location.static';
import { route } from '../../../static/routes';
import officeDeskPhoto from '../../../assets/office-desk.jpg';
import conferenceRoom from '../../../assets/conference-room.jpg';
import phoneBooth from '../../../assets/phone-booth.jpg';
import parkingSpot from '../../../assets/parking-spot.jpg';

interface Location {
    singleLocation: LocationInterface | undefined;
    spotTypeData: SpotTypeInterface[] | undefined;
}

const SpotType: React.FC<Location> = ({ singleLocation, spotTypeData }) => {
    const navigate = useNavigate();
    
    const renderImage = (name: string) => {
        switch (name) {
            case 'Office desk':
                return <img src={officeDeskPhoto} alt="Office desk" />;
            case 'Conference room':
                return <img src={conferenceRoom} alt="Conference room" />;
            case 'Phone booth':
                return <img src={phoneBooth} alt="Phone booth" />;
            case 'Parking spot':
                return <img src={parkingSpot} alt="Parking spot" />;
            default:
                return null; // Return null if no matching name is found
        }
    };
    return (
        <Container>
            <PageTitle>Reserve your spot at {singleLocation?.name}</PageTitle>
            <SpotTypeContainer>
                {spotTypeData?.map((spotType) => (
                        <SpotTypeCard key={spotType.id}>
                            <BaseButton
                                onClick={() => {
                                    navigate(`${route.createReservation}`, {
                                        state: { currentLocation: singleLocation, selectedSpotType: spotType.id },
                                    });
                                }}
                            >
                                {spotType.name}
                            </BaseButton>
                            <SpotTypeImage>{renderImage(spotType.name)}</SpotTypeImage>
                        </SpotTypeCard>
                ))}
            </SpotTypeContainer>
        </Container>
    );
};

export default SpotType;
