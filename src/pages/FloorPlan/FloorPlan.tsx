import React from 'react';
import { Link } from 'react-router-dom';
import useFloorPlan from './FloorPlan.logic';
import { ListContainer, LocationTableStyle } from './FloorPlan.style';
import DeleteIcon from '../../components/icons/DeleteIcon';
import useModal from '../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanDetails/FloorPlanListModal/DeleteModal';

const FloorPlanPage = () => {
    const { floorPlan, onDeleteClick, onDeleteConfirm } = useFloorPlan();

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();

    return (
        <ListContainer>
            <LocationTableStyle>
                <caption>Location List</caption>
                <thead>
                    <tr>
                        <th className="table-head">Floor Plan</th>
                        <th className="table-head">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {floorPlan.length > 0 ? (
                        floorPlan.map((floorPlanItem) => (
                            <tr key={floorPlanItem.id}>
                                <td data-label="Name:">{floorPlanItem.name}</td>

                                <td>
                                    <Link to={`/floorPlan/${floorPlanItem.id}`}>Show Floor Plan</Link>
                                </td>

                                <td>
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

            {isDeleteModalVisible && (
                <DeleteFloorPlanModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
        </ListContainer>
    );
};

export default FloorPlanPage;
