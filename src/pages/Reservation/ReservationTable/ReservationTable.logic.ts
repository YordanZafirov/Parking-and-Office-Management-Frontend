import { useQuery } from 'react-query';
import useToken from '../../../hooks/Token/Token.hook';
import { getFutureReservationsByUserId } from '../../../services/reservationService';
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
    } = useQuery(['reservationByUserId', userId], () => {
        if (userId) {
            return getFutureReservationsByUserId(userId);
        }
    });

    const [formattedReservations, setFormattedReservations] = useState([]);
    const [spotLoading, setSpotLoading] = useState(false);
    const [spotError, setSpotError] = useState(null);
    const [spotTypeLoading, setSpotTypeLoading] = useState(false);
    const [spotTypeError, setSpotTypeError] = useState(null);

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
        futureReservationsByUserIdLoading,
        futureReservationsByUserIdError,
        spotLoading,
        spotError,
        spotTypeLoading,
        spotTypeError,
    };
};

export default useReservationTableLogic;
