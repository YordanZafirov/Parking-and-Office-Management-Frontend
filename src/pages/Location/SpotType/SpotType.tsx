import { Link } from "react-router-dom";
import { SpotTypeContainer, SpotTypeCard } from "./SpotType.style";
import { PageTitle } from "../../../components/CommonStyledElements";

interface Location {
  name: string;
}

const SpotType: React.FC<Location> = ({ name }) => {
  return (
    <div>
      <PageTitle>Reserve your spot at {name}</PageTitle>
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

export default SpotType;
