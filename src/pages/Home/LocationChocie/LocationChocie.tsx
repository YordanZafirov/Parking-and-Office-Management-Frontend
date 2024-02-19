import { Link } from "react-router-dom";
import { Location } from "../Home.static";
import { InformationContainer, LocationImage } from "./LocationChoice.style";

const LocationChoice = ({location}: {location: Location}) => {
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
}
 
export default LocationChoice;