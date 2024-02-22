import Loader from '../../components/loader/Loader';
import LocationTable from './ReservationTable/ReservationTable';
import SpotType from './SpotType/SpotType';
import useLocation from './Reservation.logic';
import useSpotType from './SpotType/SpotType.logic';
import useReservationTableLogic from './ReservationTable/ReservationTable.logic';
import { ReservationContainer } from './Reservation.style';

const Reservation = () => {
    // Fetch location and spot type data
    const { singleLocation, isLoading: loadingLocation, error: errorLocation } = useLocation();
    const { spotTypeByLocationId, isLoading: loadingSpotType, error: errorSpotType } = useSpotType();

    const { futureReservationsByUserIdLoading, futureReservationsByUserIdError } = useReservationTableLogic();

    if (loadingLocation && loadingSpotType && futureReservationsByUserIdLoading) {
        return <Loader />;
    }

    if (errorLocation || errorSpotType || futureReservationsByUserIdError) {
        return <div>Error loading location</div>;
    }

    return (
        <ReservationContainer>
            <SpotType singleLocation={singleLocation} spotTypeData={spotTypeByLocationId} />
            <LocationTable />
        </ReservationContainer>
    );
};

export default Reservation;
