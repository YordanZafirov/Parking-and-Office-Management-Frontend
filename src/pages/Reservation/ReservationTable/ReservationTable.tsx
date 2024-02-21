import { useEffect } from 'react';
import useReservationTableLogic from './ReservationTable.logic';
import { ReservationTableInterface } from './ReservationTable.static';
import { ReservationTableStyle } from './ReservationTable.style';
import { Container } from '../../../components/CommonStyledElements';

const ReservationTable = () => {
    const { formattedReservations } = useReservationTableLogic();

    useEffect(() => {
        console.log('formattedReservations', formattedReservations);
    }, [formattedReservations]);

    return (
        <Container>
            <ReservationTableStyle>
                <caption>Future Reservations</caption>
                <thead>
                    <tr>
                        <th>Spot</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Comment</th>
                        <th>Spot Description</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {formattedReservations.map((reservation: ReservationTableInterface, index) => {
                        return (
                            <tr key={index}>
                                <td>{reservation.spotName}</td>
                                <td>{new Date(reservation.start).toLocaleString()}</td>
                                <td>{new Date(reservation.end).toLocaleString()}</td>
                                <td>{reservation.comment}</td>
                                <td>{reservation.spotDescription}</td>
                                <td>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </ReservationTableStyle>
        </Container>
    );
};

export default ReservationTable;
