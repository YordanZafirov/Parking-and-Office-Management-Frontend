import { BigButtonLight, Container, PageTitle } from '../CommonStyledElements';
import Loader from '../loader/Loader';
import { ReservationToFix } from '../../services/userService';
import useUserReservationsTableLogic from './UserReservationsTable.logic';
import { UserReservationsTableInterface } from './UserReservationsTable.static';
import { UserReservationsTableStyle } from './UserReservationsTable.styles';

const UserReservationsTable = ({
    reservations,
    isLoading,
    refetch,
    reservationType,
}: {
    reservations: ReservationToFix[] | undefined;
    isLoading: boolean;
    refetch: () => void;
    reservationType: string;
}) => {
    const { formattedReservations, deleteReservation, areLoading } = useUserReservationsTableLogic(
        reservations,
        isLoading,
        refetch,
    );

    if (areLoading) {
        return <Loader />;
    }

    return (
        <Container>
            <div>
                {formattedReservations.length === 0 ? (
                    <PageTitle>{`No ${reservationType} Reservations`}</PageTitle>
                ) : (
                    <UserReservationsTableStyle>
                        <caption>{`${reservationType} Reservations`}</caption>
                        <thead>
                            <tr>
                                <th className="table-head">Spot</th>
                                <th className="table-head">Spot Description</th>
                                <th className="table-head">Comment</th>
                                <th className="table-head">Start</th>
                                <th className="table-head">End</th>
                                {reservationType === 'Future' && <th className="table-head">Action</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {formattedReservations.map((reservation: UserReservationsTableInterface) => {
                                return (
                                    <tr key={reservation.id}>
                                        <td data-label="Spot:">{reservation.spotName}</td>
                                        <td data-label="Spot Description:">{reservation.spotDescription}</td>
                                        <td data-label="Comment:">{reservation.comment}</td>
                                        <td data-label="Start:">{new Date(reservation.start).toLocaleString()}</td>
                                        <td data-label="End:">{new Date(reservation.end).toLocaleString()}</td>
                                        {reservationType === 'Future' && (
                                            <td>
                                                <BigButtonLight
                                                    className="remove-btn"
                                                    onClick={() => deleteReservation(reservation.id)}
                                                >
                                                    Delete
                                                </BigButtonLight>
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </UserReservationsTableStyle>
                )}
            </div>
        </Container>
    );
};

export default UserReservationsTable;
