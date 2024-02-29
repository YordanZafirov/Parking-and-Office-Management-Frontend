import DeleteLocationModal from '../../pages/AdminPage/AdminListModal/DeleteModal/DeleteModal';
import { Reservation } from '../../static/types';
import { Container, PageTitle } from '../CommonStyledElements';
import useModal from '../ModalList/useModal';
import DeleteIcon from '../icons/DeleteIcon';
import Loader from '../loader/Loader';
import useUserReservationsTableLogic from './UserReservationsTable.logic';
import { ReservationsTable } from './UserReservationsTable.static';
import { UserReservationsTableStyle } from './UserReservationsTable.styles';

const UserReservationsTable = ({
    reservations,
    isLoading,
    refetch,
    reservationType,
}: {
    reservations: Reservation[] | undefined;
    isLoading: boolean;
    refetch: () => void;
    reservationType: string;
}) => {
    const { formattedReservations, areLoading, onDeleteConfirm, onDeleteClick } = useUserReservationsTableLogic(
        reservations,
        isLoading,
        refetch,
    );

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();

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
                            {formattedReservations.map((reservation: ReservationsTable) => {
                                return (
                                    <tr key={reservation.id}>
                                        <td data-label="Spot:">{reservation.spotName}</td>
                                        <td data-label="Spot Description:">{reservation.spotDescription}</td>
                                        <td data-label="Comment:">{reservation.comment}</td>
                                        <td data-label="Start:">{new Date(reservation.start).toLocaleString()}</td>
                                        <td data-label="End:">{new Date(reservation.end).toLocaleString()}</td>
                                        {reservationType === 'Future' && (
                                            <td>
                                                <DeleteIcon
                                                    onClick={() => {
                                                        onDeleteClick(reservation.id);
                                                        showDeleteModal();
                                                    }}
                                                />
                                            </td>
                                        )}
                                    </tr>
                                );
                            })}
                        </tbody>
                    </UserReservationsTableStyle>
                )}
            </div>

            {isDeleteModalVisible && (
                <DeleteLocationModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
        </Container>
    );
};

export default UserReservationsTable;
