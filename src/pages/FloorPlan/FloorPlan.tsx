import { useNavigate } from 'react-router-dom';
import { ArrowIcon, BackButton, LinkFloorPlan, ListContainer, LocationTableStyle } from './FloorPlan.style';
import DeleteIcon from '../../components/icons/DeleteIcon';
import useModal from '../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanListModal/DeleteModal/DeleteModal';
import EditIcon from '../../components/icons/EditIcon';
import EditFloorPlanModal from './FloorPlanListModal/EditModal/EditModal';
import useFloorPlan from './FloorPlan.logic';
import { FaArrowLeft } from 'react-icons/fa';

const FloorPlanPage = () => {
    const navigate = useNavigate();

    const {
        floorPlan,
        isLoading,
        onDeleteClick,
        onDeleteConfirm,
        onEditClick,
        onEditConfirm,
        setCurrentFloorPlanName,
        currentFloorPlanImage,
        setCurrentFloorPlanImage,
        originalFloorPlanName,
    } = useFloorPlan();

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();
    const { isVisible: isEditModalVisible, showModal: showEditModal, hideModal: hideEditModal } = useModal();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <ListContainer>
            <BackButton onClick={handleGoBack}>
                <FaArrowLeft />
            </BackButton>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <LocationTableStyle>
                    <caption>Location List</caption>
                    <thead>
                        <tr>
                            <th className="table-head">Floor Plan</th>
                            <th className="table-head">Open Floor Plan</th>
                            <th className="table-head">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {floorPlan.length > 0 ? (
                            floorPlan.map((floorPlanItem) => (
                                <tr key={floorPlanItem.id}>
                                    <td data-label="Name:">{floorPlanItem.name}</td>

                                    <td data-label="Open Floor Plan:">
                                        <LinkFloorPlan to={`/floorPlan/${floorPlanItem.id}`}>
                                            Show Floor Plan
                                            <ArrowIcon />
                                        </LinkFloorPlan>
                                    </td>

                                    <td data-label="Action:">
                                        <EditIcon
                                            onClick={() => {
                                                onEditClick(
                                                    floorPlanItem.id || '',
                                                    floorPlanItem.name || '',
                                                    floorPlanItem.imgUrl || '',
                                                );
                                                showEditModal();
                                            }}
                                        />

                                        <DeleteIcon
                                            onClick={() => {
                                                onDeleteClick(floorPlanItem.id || '');
                                                showDeleteModal();
                                            }}
                                        />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No floor plans available</td>
                            </tr>
                        )}
                    </tbody>
                </LocationTableStyle>
            )}

            {isDeleteModalVisible && (
                <DeleteFloorPlanModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}

            {isEditModalVisible && (
                <EditFloorPlanModal
                    isVisible={isEditModalVisible}
                    hideModal={hideEditModal}
                    onConfirm={onEditConfirm}
                    currentFloorPlanName={originalFloorPlanName}
                    currentFloorPlanImage={currentFloorPlanImage}
                    setCurrentFloorPlanName={setCurrentFloorPlanName}
                    setCurrentFloorPlanImage={setCurrentFloorPlanImage}
                />
            )}
        </ListContainer>
    );
};

export default FloorPlanPage;
