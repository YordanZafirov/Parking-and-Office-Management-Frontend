import useToken from '../../hooks/Token/Token.hook';
import useReservationSummary from './ReservationSummary.logic';

const ReservationSummary = () => {
    const user = useToken();

    const userId = user?.id;
    const userEmail = user?.email;

    const reservations = [
        {
            spotId: '1',
            start: new Date(),
            end: new Date(),
            comment: 'This is a comment',
            userId: userId,
            modifiedBy: userId,
        },
        {
            spotId: '2',
            start: new Date(),
            end: new Date(),
            comment: 'This is a comment',
            userId: userId,
            modifiedBy: userId,
        },
        {
            spotId: '3',
            start: new Date(),
            end: new Date(),
            comment: 'This is a comment',
            userId: userId,
            modifiedBy: userId,
        },
    ];
    const { spotName, isLoading, error } = useReservationSummary(reservations[0].spotId);
    return (
        <div>
            <h1>Reservation Summary</h1>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.spotId}>
                        <div>Spot ID: {reservation.spotId}</div>
                        <div>Start: {reservation.start.toLocaleString()}</div>
                        <div>End: {reservation.end.toLocaleString()}</div>
                        <div>Comment: {reservation.comment}</div>
                        <div>User ID: {userEmail}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ReservationSummary;
