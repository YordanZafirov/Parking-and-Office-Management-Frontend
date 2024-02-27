import Loader from '../../components/loader/Loader';
import SpotTypeCards from './SpotTypeCards/SpotTypeCards';
import useChoseLocation from './SpotType.logic';
import useSpotType from './SpotTypeCards/SpotTypeCards.logic';
import { ChooseLocationContainer } from './SpotType.style';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';
import { UserProfilePageLogic } from '../User/UserProfilePage/UserProfilePage.logic';

const SpotType = () => {
    // Fetch location and spot type data
    const { singleLocation, isLoading: loadingLocation, error: errorLocation } = useChoseLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotType();
    const { futureReservations, areFutureReservationsLoading, futureReservationsRefetch } = UserProfilePageLogic();

    // Check if any of the queries is loading
    const loading = loadingLocation || loadingSpotType || areFutureReservationsLoading;

    // Check if any of the queries has an error
    const hasError = errorLocation || errorSpotType;

    if (loading) {
        // Render loader only when data is being fetched
        return <Loader />;
    }

    if (hasError) {
        // Render error message if any of the queries encountered an error
        return <div>Error loading data</div>;
    }
    return (
        <ChooseLocationContainer>
            <SpotTypeCards singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
            <UserReservationsTable
                reservations={futureReservations}
                isLoading={areFutureReservationsLoading}
                refetch={futureReservationsRefetch}
                reservationType="Future"
            />
        </ChooseLocationContainer>
    );
};

export default SpotType;
