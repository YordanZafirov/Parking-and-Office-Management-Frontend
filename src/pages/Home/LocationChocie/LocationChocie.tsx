import { Link } from 'react-router-dom';
import { Location } from '../Home.static';
import { InformationContainer, LocationImage } from './LocationChoice.style';
import { SpotTypeCard } from '../../Reservation/SpotType/SpotType.style';

const LocationChoice = ({ location }: { location: Location }) => {
    return (
        <li>
            <div>
                <Link to={`location/${location.id}`}>
                    <SpotTypeCard>
                        <LocationImage src={location.imgUrl} alt="location-photo" />
                        <InformationContainer>
                            <span>{location.city}</span>
                            <span>{location.name}</span>
                        </InformationContainer>
                    </SpotTypeCard>
                </Link>
            </div>
        </li>
    );
};

export default LocationChoice;
