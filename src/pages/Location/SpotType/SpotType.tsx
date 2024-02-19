import { Link } from "react-router-dom";
import { SpotTypeContainer, SpotTypeCard, Title } from "./SpotType.style";

interface Location {
  name: string;
}

const SpotChoice: React.FC<Location> = ({ name }) => {
  return (
    <div>
      <Title>Reserve your spot at {name}</Title>
      <SpotTypeContainer>
        <SpotTypeCard>
          <Link to="#">Office desk</Link>
        </SpotTypeCard>
        <SpotTypeCard>
          <Link to="#">Office desk</Link>
        </SpotTypeCard>
        <SpotTypeCard>
          <Link to="#">Office desk</Link>
        </SpotTypeCard>
        <SpotTypeCard>
          <Link to="#">Office desk</Link>
        </SpotTypeCard>
      </SpotTypeContainer>
    </div>
  );
};

export default SpotChoice;
