import { Link } from "react-router-dom";
import { Location } from "../Home.static";
import { DeleteButton, InformationContainer, LocationImage } from "./LocationChoice.style";
import UserRoleHOC from "../../UserRoleHOC";
import useLocationChoice from "./LocationChoise.logic";

const LocationChoice = ({ location }: { location: Location }) => {
    const { onDeleteClick } = useLocationChoice();

    return (
        <li>
            <div>
                <LocationImage src={location.imgUrl} alt="location-photo" />

                <InformationContainer>
                    <Link to={`location/${location.id}`}>
                        <span>{location.city}</span>
                        <span>{location.name}</span>
                    </Link>
                </InformationContainer>

                <UserRoleHOC>
                    <DeleteButton
                        onClick={() => {
                            onDeleteClick(location.id || "");
                        }}
                    >
                        Delete
                    </DeleteButton>
                </UserRoleHOC>
            </div>
        </li>
    );
};

export default LocationChoice;
