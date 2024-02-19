import { Link } from "react-router-dom";
import { InformationContainer, LocationImage } from "./LocationChoice.style";
import { LocationInterface } from "../../Location/Location.static";

const LocationChoice = ({ location }: { location: LocationInterface }) => {
  return (
    <li>
      <Link to={`location/${location.id}`}>
        <div>
          <LocationImage src={location.imgUrl} alt="location-photo" />
          <InformationContainer>
            <span>{location.city}</span>
            <span>{location.name}</span>
          </InformationContainer>
        </div>
      </Link>
    </li>
  );
};

export default LocationChoice;
