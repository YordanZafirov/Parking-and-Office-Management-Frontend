import { useEffect } from 'react';
import useReservationTableLogic from './ReservationTable.logic';
import { ReservationTableInterface } from './ReservationTable.static';
import { ReservationTableStyle } from './ReservationTable.style';
import { Container, PageTitle } from '../../../components/CommonStyledElements';

const ReservationTable = () => {
    const { formattedReservations, deleteReservation } = useReservationTableLogic();

    useEffect(() => {
        console.log('formattedReservations', formattedReservations);
    }, [formattedReservations]);

    return (
        <Container>
            {formattedReservations.length === 0 ? (
                <PageTitle>No future reservations</PageTitle>
            ) : (
                <ReservationTableStyle>
                    <caption>Future Reservations</caption>
                    <thead>
                        <tr>
                            <th>Spot</th>
                            <th>Spot Description</th>
                            <th>Comment</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {formattedReservations.map((reservation: ReservationTableInterface) => {
                            return (
                                <tr key={reservation.id}>
                                    <td>{reservation.spotName}</td>
                                    <td>{reservation.spotDescription}</td>
                                    <td>{reservation.comment}</td>
                                    <td>{new Date(reservation.start).toLocaleString()}</td>
                                    <td>{new Date(reservation.end).toLocaleString()}</td>
                                    <td>
                                        <button onClick={() => deleteReservation(reservation.id)}>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </ReservationTableStyle>
            )}
        </Container>
    );
};

export default ReservationTable;
