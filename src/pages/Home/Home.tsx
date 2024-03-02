import { HomeContainer } from './Home.style';
import useHome from './Home.logic';
import { Location } from './Home.static';
import Loader from '../../components/Loader/Loader';
import LocationChoice from './LocationChocie/LocationChocie';

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
            {locations ? (
                <>
                    <h1>Choose location</h1>
                    <ul>
                        {locations.map((location: Location) => (
                            <LocationChoice key={location.id} location={location} />
                        ))}
                    </ul>
                </>
            ) : (
                <Loader />
            )}
        </HomeContainer>
    );
};

export default Home;
