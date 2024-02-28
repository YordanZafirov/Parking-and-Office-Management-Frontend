import { useEffect } from 'react';

import { RiCloseFill } from 'react-icons/ri';

import useReservationSummary from './ReservationSummary.logic';
import { ReservationInterface } from '../../static/types';
import Loader from '../../components/loader/Loader';
import { useReservationContext } from '../../context/ReservationContext';
import {
    ReservationRemveButton,
    ReservationSummaryButton,
    ReservationSummaryContainer,
    ReservationSummaryList,
    ReservationSummaryListItem,
} from './ReservationSummary.style';
import { PageTitle } from '../../components/CommonStyledElements';

const ReservationSummary = () => {
    const { reservations, sendReservationsToBackend, removeReservation } = useReservationContext();
    const { isLoading, error, spotNames } = useReservationSummary();

    useEffect(() => {
        console.log('Transformed reservation', reservations);
    }, [reservations]);

    const handleConfirm = () => {
        sendReservationsToBackend(reservations);
    };

    if (isLoading) {
        return <Loader />;
    }

    if (error) {
        return <div>Something went wrong</div>;
    }

    return (
        <ReservationSummaryContainer>
            <PageTitle>Reservation Summary</PageTitle>
            {reservations.length === 0 && !isLoading ? (
                <div>No reservations</div>
            ) : (
                <>
                    <ReservationSummaryList>
                        {reservations.map((reservation: ReservationInterface) => (
                            <ReservationSummaryListItem
                                key={`${reservation.spotId}_${reservation.start}_${reservation.end}`}
                            >
                                <div>Spot Name: {spotNames[reservation.spotId]}</div>
                                <div>Start: {new Date(reservation.start).toDateString()}</div>
                                <div>End: {new Date(reservation.end).toDateString()}</div>
                                <div>Comment: {reservation.comment}</div>
                                {/* Add start and end date to handleRemove */}
                                <ReservationRemveButton
                                    onClick={() =>
                                        removeReservation(reservation.spotId, reservation.start, reservation.end)
                                    }
                                >
                                    <RiCloseFill />
                                </ReservationRemveButton>
                            </ReservationSummaryListItem>
                        ))}
                    </ReservationSummaryList>
                    <ReservationSummaryButton onClick={handleConfirm}>Confirm</ReservationSummaryButton>
                </>
            )}
        </ReservationSummaryContainer>
    );
};

export default ReservationSummary;
