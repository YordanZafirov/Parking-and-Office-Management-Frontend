import Loader from '../../components/loader/Loader';
import SpotType from './SpotType/SpotType';
import useLocation from './Reservation.logic';
import useSpotType from './SpotType/SpotType.logic';
import useReservationTableLogic from './ReservationTable/ReservationTable.logic';
import { ReservationContainer } from './Reservation.style';
import UserReservationsTable from '../../components/UserReservationsTable/UserReservationsTable';

const Reservation = () => {
    // Fetch location and spot type data
    const { singleLocation, isLoading: loadingLocation, error: errorLocation } = useLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotType();
    const {
        allFutureReservationsByUserId,
        futureReservationsByUserIdLoading,
        refetch,
        futureReservationsByUserIdError,
    } = useReservationTableLogic();

    // Check if any of the queries is loading
    const loading = loadingLocation || loadingSpotType || futureReservationsByUserIdLoading;

    // Check if any of the queries has an error
    const hasError = errorLocation || errorSpotType || futureReservationsByUserIdError;

    if (loading) {
        // Render loader only when data is being fetched
        return <Loader />;
    }

    if (hasError) {
        // Render error message if any of the queries encountered an error
        return <div>Error loading data</div>;
    }
    return (
        <ReservationContainer>
            <SpotType singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
            <UserReservationsTable
                reservations={allFutureReservationsByUserId}
                isLoading={futureReservationsByUserIdLoading}
                refetch={refetch}
                reservationType="Future"
            />
        </ReservationContainer>
    );
};

export default Reservation;
