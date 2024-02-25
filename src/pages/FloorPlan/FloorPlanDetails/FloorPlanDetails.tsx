import React from 'react';
import { FloorPlan as FloorPlanProp } from '../FloorPlan.static';
import { FloorPlanDetailsContainer, HeadingFloorPlan } from './FloorPlanDetails.style';
// import EditIcon from '../../../components/icons/EditIcon';
import DeleteIcon from '../../../components/icons/DeleteIcon';
import useModal from '../../../components/ModalList/useModal';
import DeleteFloorPlanModal from './FloorPlanListModal/DeleteModal';
import useFloorPlanDetails from './FloorPlanDetails.logic';

interface FloorPlansDetailsProps {
    floorPlans: FloorPlanProp[];
}

const FloorPlanDetails: React.FC<FloorPlansDetailsProps> = ({ floorPlans }) => {
    const { onDeleteClick, onDeleteConfirm } = useFloorPlanDetails();

    const { isVisible: isDeleteModalVisible, showModal: showDeleteModal, hideModal: hideDeleteModal } = useModal();

    return (
        <FloorPlanDetailsContainer>
            {floorPlans.length > 0 ? (
                floorPlans.map((floorPlan: FloorPlanProp) => (
                    <div key={floorPlan.id}>
                        <HeadingFloorPlan>
                            {floorPlan.name}
                            {/* <EditIcon
                                onClick={() => {
                                    onEditClick(
                                        floorPlan.id || '',
                                        floorPlan.name || '',
                                        location.city || '',
                                        location.address || '',
                                    );
                                    showEditModal();
                                }}
                            /> */}
                            <DeleteIcon
                                onClick={() => {
                                    onDeleteClick(floorPlan.id || '');
                                    showDeleteModal();
                                }}
                            />
                        </HeadingFloorPlan>
                        <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
                    </div>
                ))
            ) : (
                <div>No Floor Plan available</div>
            )}

            {isDeleteModalVisible && (
                <DeleteFloorPlanModal
                    isVisible={isDeleteModalVisible}
                    hideModal={hideDeleteModal}
                    onDeleteConfirm={onDeleteConfirm}
                />
            )}
        </FloorPlanDetailsContainer>
    );
};

export default FloorPlanDetails;
