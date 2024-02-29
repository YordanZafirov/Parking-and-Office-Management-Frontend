import { useMutation } from 'react-query';
import { deleteReservation } from '../../services/reservationService';
import { useEffect, useState } from 'react';
import { ReservationToFix } from '../../services/userService';
import { getSpotById } from '../../services/spotService';
import { getSpotType } from '../../services/spotTypeService';

const useUserReservationsTableLogic = (
    reservations: ReservationToFix[] | undefined,
    areLoading: boolean,
    refetch: () => void,
) => {
    const deleteReservationMutation = useMutation(deleteReservation, {
        onSuccess: () => {
            refetch();
        },
    });

    const [formattedReservations, setFormattedReservations] = useState([]);

    useEffect(() => {
        if (!reservations) return;

        const fetchSpotData = async () => {
            const formattedData = await Promise.all(
                reservations.map(async (reservation: ReservationToFix) => {
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
    }, [reservations]);

    return {
        formattedReservations,
        deleteReservation: deleteReservationMutation.mutate,
        areLoading,
    };
};

export default useUserReservationsTableLogic;
