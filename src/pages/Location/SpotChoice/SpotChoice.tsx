import { Link } from "react-router-dom";
import { LocationCard, LocationContainer, Title } from "./SpotChoice.style";

const SpotChoice = () => {
  return (
    <div>
      <Title>Reserve your spot now</Title>
      <LocationContainer>
        <LocationCard>
          <Link to="#">Office desk</Link>
        </LocationCard>
        <LocationCard>
          <Link to="#">Office desk</Link>
        </LocationCard>
        <LocationCard>
          <Link to="#">Office desk</Link>
        </LocationCard>
        <LocationCard>
          <Link to="#">Office desk</Link>
        </LocationCard>
      </LocationContainer>
    </div>
  );
};

export default SpotChoice;
