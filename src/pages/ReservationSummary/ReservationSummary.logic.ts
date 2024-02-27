import { useQuery } from 'react-query';
import { getSpotById } from '../../services/spotService';
import { ReservationInterface } from '../../static/types';

const useReservationSummary = () => {
    const reservations = sessionStorage.getItem('reservation');
    const transformedReservations = JSON.parse(reservations || '[]');

    const getSpotName = async (spotId: string) => {
        const spot = await getSpotById(spotId);
        return spot.name;
    };

    const {
        data: updatedReservations,
        isLoading,
        error,
    } = useQuery('spot', async () => {
        const spotNamesPromises = transformedReservations.map(async (reservation: ReservationInterface) => {
            const spotName = await getSpotName(reservation.spotId);
            return spotName;
        });

        const spotNames = await Promise.all(spotNamesPromises);

        // Map through the transformed reservations and add spotName to each reservation
        const updatedReservations = transformedReservations.map((reservation: ReservationInterface, index: number) => {
            return { ...reservation, spotName: spotNames[index] };
        });

        return updatedReservations;
    });

    return { reservations: updatedReservations, isLoading, error };
};

export default useReservationSummary;
