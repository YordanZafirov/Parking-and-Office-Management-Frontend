import { useNavigate } from 'react-router-dom';
import { SpotTypeContainer, SpotTypeCard } from './SpotType.style';
import { BaseButton, Container, PageTitle } from '../../../components/CommonStyledElements';
import { SpotTypeInterface } from './SpotType.static';
import { LocationInterface } from '../Location.static';
import { route } from '../../../static/routes';

interface Location {
    singleLocation: LocationInterface | undefined;
    spotTypeData: SpotTypeInterface[] | undefined;
}

const SpotType: React.FC<Location> = ({ singleLocation, spotTypeData }) => {
    const navigate = useNavigate();
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
                    </SpotTypeCard>
                ))}
            </SpotTypeContainer>
        </Container>
    );
};

export default SpotType;
