import { useMutation, useQuery } from 'react-query';
import useToken from '../../../hooks/Token/Token.hook';
import { deleteReservation, getFutureReservationsByUserId } from '../../../services/reservationService';

const useReservationTableLogic = () => {
    const decodedToken = useToken();
    const { id: userId } = decodedToken || {};

    // Fetch all future reservations for the current user
    const {
        data: allFutureReservationsByUserId,
        isLoading: futureReservationsByUserIdLoading,
        error: futureReservationsByUserIdError,
        refetch,
    } = useQuery(['reservationByUserId', userId], () => {
        if (userId) {
            return getFutureReservationsByUserId(userId);
        }
    });

    // Mutation to delete a reservation
    const deleteReservationMutation = useMutation(deleteReservation, {
        onSuccess: () => {
            refetch();
        },
    });

    return {
        allFutureReservationsByUserId,
        deleteReservation: deleteReservationMutation.mutate,
        refetch,
        futureReservationsByUserIdLoading,
        futureReservationsByUserIdError,
    };
};

export default useReservationTableLogic;
