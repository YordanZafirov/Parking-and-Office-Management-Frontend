import { Link } from 'react-router-dom';
import { ListContainer, LocationTableStyle } from './FloorPlan.style';
import DeleteIcon from '../../components/icons/DeleteIcon';
import useModal from '../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanDetails/FloorPlanListModal/DeleteModal/DeleteModal';
import EditIcon from '../../components/icons/EditIcon';
import EditFloorPlanModal from './FloorPlanDetails/FloorPlanListModal/EditModal/EditModal';

import useFloorPlan from './FloorPlan.logic';

const FloorPlanPage = () => {
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

    return (
        <ListContainer>
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
                                        <Link to={`/floorPlan/${floorPlanItem.id}`}>Show Floor Plan</Link>
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
