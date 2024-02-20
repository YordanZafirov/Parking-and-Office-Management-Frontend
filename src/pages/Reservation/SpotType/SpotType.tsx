import { Link } from "react-router-dom";
import { SpotTypeContainer, SpotTypeCard } from "./SpotType.style";
import { PageTitle } from "../../../components/CommonStyledElements";
import { SpotTypeInterface } from "./SpotType.static";

interface Location {
  name: string | undefined;
  spotTypeData: SpotTypeInterface[] | undefined;
}

const SpotType: React.FC<Location> = ({ name, spotTypeData }) => {
  return (
    <div>
      <PageTitle>Reserve your spot at {name}</PageTitle>
      <SpotTypeContainer>
        {spotTypeData?.map((spotType) => (
          <SpotTypeCard key={spotType.id}>
            <Link to="#">{spotType.name}</Link>
          </SpotTypeCard>
        ))}
      </SpotTypeContainer>
    </div>
  );
};

export default SpotType;
