import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
            <div key={floorPlan.id}>
                <HeadingFloorPlan>{floorPlan.name}</HeadingFloorPlan>
                <img src={floorPlan.imgUrl} alt="Floor Plan" style={{ maxWidth: '100%' }} />
            </div>
        </FloorPlanDetailsContainer>
    );
};

export default FloorPlanDetails;
