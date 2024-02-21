import { Link } from 'react-router-dom';
import { Location } from '../Home.static';
import { DeleteButton, InformationContainer, LocationImage } from './LocationChoice.style';
import UserRoleHOC from '../../UserRoleHOC';
import useLocationChoice from './LocationChoise.logic';

const LocationChoice = ({ location }: { location: Location }) => {
    const { onDeleteClick } = useLocationChoice();

    return (
        <li>
            <div>
                <Link to={`location/${location.id}`}>
                    <LocationImage src={location.imgUrl} alt="location-photo" />
                    <InformationContainer>
                        <span>{location.city}</span>
                        <span>{location.name}</span>
                    </InformationContainer>
                </Link>
            </div>

            <UserRoleHOC>
                <DeleteButton
                    onClick={() => {
                        onDeleteClick(location.id || '');
                    }}
                >
                    ❌
                </DeleteButton>
            </UserRoleHOC>
        </li>
    );
};

export default LocationChoice;
