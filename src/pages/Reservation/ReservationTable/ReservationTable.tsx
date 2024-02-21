import { useEffect } from 'react';
import useReservationTableLogic from './ReservationTable.logic';
import { ReservationTableInterface } from './ReservationTable.static';

const ReservationTable = () => {
    const { formattedReservations } = useReservationTableLogic();

    useEffect(() => {
        console.log('formattedReservations', formattedReservations);
    }, [formattedReservations]);

    return (
        <table>
            <caption>My reservations</caption>
            <thead>
                <tr>
                    <th>Spot</th>
                    <th>Start</th>
                    <th>End</th>
                    <th>Comment</th>
                    <th>Spot Description</th>
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
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default ReservationTable;
