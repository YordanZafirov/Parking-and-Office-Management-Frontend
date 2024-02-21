import { useMutation, useQuery } from 'react-query';
import useToken from '../../../hooks/Token/Token.hook';
import { deleteReservation, getFutureReservationsByUserId } from '../../../services/reservationService';
import { getSpotById } from '../../../services/spotService';
import { getSpotType } from '../../../services/spotTypeService';
import { useEffect, useState } from 'react';

const useReservationTableLogic = () => {
    const decodedToken = useToken();
    const { id: userId } = decodedToken || {};
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

    const deleteReservationMutation = useMutation(deleteReservation, {
        onSuccess: () => {
            refetch();
        },
    });

    const [formattedReservations, setFormattedReservations] = useState([]);

    useEffect(() => {
        if (!allFutureReservationsByUserId) return;

        const fetchSpotData = async () => {
            const formattedData = await Promise.all(
                allFutureReservationsByUserId.map(async (reservation) => {
                    const spotId = reservation.spotId;
                    try {
                        const spot = await getSpotById(spotId);
                        const spotType = await getSpotType(spot.spotTypeId);

                        return {
                            id: reservation.id,
                            comment: reservation.comment,
                            spotName: spot.name,
                            spotDescription: spot.description,
                            spotTypeName: spotType.name,
                            start: reservation.start,
                            end: reservation.end,
                        };
                    } catch (error) {
                        console.error('Error fetching spot or spot type:', error);
                        return null;
                    }
                }),
            );

            setFormattedReservations(formattedData);
        };

        fetchSpotData();
    }, [allFutureReservationsByUserId]);

    return {
        formattedReservations,
        deleteReservation: deleteReservationMutation.mutate,
        futureReservationsByUserIdLoading,
        futureReservationsByUserIdError,
    };
};

export default useReservationTableLogic;
