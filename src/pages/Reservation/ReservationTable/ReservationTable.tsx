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
            <div>
                {formattedReservations.length === 0 ? (
                    <PageTitle>No future reservations</PageTitle>
                ) : (
                    <ReservationTableStyle>
                        <caption>Future Reservations</caption>
                        <thead>
                            <tr>
                                <th className='table-head'>Spot</th>
                                <th className='table-head'>Spot Description</th>
                                <th className='table-head'>Comment</th>
                                <th className='table-head'>Start</th>
                                <th className='table-head'>End</th>
                                <th className='table-head'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formattedReservations.map((reservation: ReservationTableInterface) => {
                                return (
                                    <tr key={reservation.id}>
                                        <td data-label="Spot:">{reservation.spotName}</td>
                                        <td data-label="Spot Description:">{reservation.spotDescription}</td>
                                        <td data-label="Comment:">{reservation.comment}</td>
                                        <td data-label="Start:">{new Date(reservation.start).toLocaleString()}</td>
                                        <td data-label="End:">{new Date(reservation.end).toLocaleString()}</td>
                                        <td>
                                            <button onClick={() => deleteReservation(reservation.id)}>Delete</button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </ReservationTableStyle>
                )}
            </div>
        </Container>
    );
};

export default ReservationTable;
