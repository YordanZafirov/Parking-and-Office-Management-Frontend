import { useEffect } from 'react';
import useToken from '../../hooks/Token/Token.hook';
import useReservationSummary from './ReservationSummary.logic';
import { ReservationInterface } from '../../static/types';

const ReservationSummary = () => {
    const user = useToken();

    const userId = user?.id;
    const userEmail = user?.email;

    const { reservations: reservations, isLoading, error } = useReservationSummary();

    useEffect(() => {
        console.log(reservations);
    }, [reservations]);

    return (
        <div>
            <h1>Reservation Summary</h1>
            <ul>
                {reservations.map((reservation: ReservationInterface) => (
                    <li key={reservation.spotId}>
                        <div>Spot Name: {reservation.spotName}</div>
                        <div>Start: {new Date(reservation.start).toLocaleString()}</div>
                        <div>End: {new Date(reservation.end).toLocaleString()}</div>
                        <div>Comment: {reservation.comment}</div>
                        <div>User ID: {userEmail}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationSummary;
