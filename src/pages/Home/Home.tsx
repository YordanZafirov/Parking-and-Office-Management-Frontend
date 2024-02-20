import { HomeContainer } from "./Home.style";
import useHome from "./Home.logic";
import { Location } from "./Home.static";
import Loader from "../../components/loader/Loader";
import LocationChoice from "./LocationChocie/LocationChocie";
import { useNavigate } from "react-router-dom";
import UserRoleHOC from "../UserRoleHOC";

const Home = () => {
    const { locations, isLoading, error } = useHome();
    const navigate = useNavigate();

    const handleCreateLocationClick = () => {
        // Navigate to the LocationCreateForm route
        navigate("/createLocation");
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Error loading locations</div>;
    }

    return (
        <>
            <UserRoleHOC>
                <button onClick={handleCreateLocationClick}>Create Location</button>
            </UserRoleHOC>
            <HomeContainer>
                {locations.length === 0 && <div>No locations found</div>}
                <h1>Choose location</h1>
                <ul>
                    {locations.map((location: Location) => (
                        <LocationChoice key={location.id} location={location} />
                    ))}
                </ul>
            </HomeContainer>
        </>
    );
};

export default Home;
