import { HomeContainer } from "./Home.style";
import useHome from "./Home.logic";
import { LocationInterface } from "../Location/Location.static";
import Loader from "../../components/loader/Loader";
import LocationChoice from "./LocationChocie/LocationChocie";

const Home = () => {
  const { locations, isLoading, error } = useHome();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <div>Error loading locations</div>;
  }

  return (
    <HomeContainer>
      {locations?.length === 0 && <div>No locations found</div>}
      <h1>Choose location</h1>
      <ul>
        {locations?.map((location: LocationInterface) => (
          <LocationChoice key={location.id} location={location} />
        ))}
      </ul>
    </HomeContainer>
  );
};

export default Home;
