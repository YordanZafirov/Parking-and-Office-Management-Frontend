import React, { useState } from 'react';
import Modal from '../../../../../components/ModalList/Modal';
import { ErrorStyles, HeaderModal, InputModal, ItemsModal, LabelModal } from './EditModal.style';
import { useEditModalError } from './EditModalErrors';

interface EditModalProps {
    isVisible: boolean;
    hideModal: () => void;
    currentFloorPlanName: string;
    currentFloorPlanImage: string;
    setCurrentFloorPlanName: (newFloorPlanName: string) => void;
    setCurrentFloorPlanImage: (newFloorPlanImage: string) => void;
    onConfirm: (newFloorPlanName: string, newFloorPlanImage: string) => void;
}

const EditFloorPlanModal: React.FC<EditModalProps> = ({
    isVisible,
    hideModal,
    currentFloorPlanName,
    currentFloorPlanImage,
    setCurrentFloorPlanName,
    onConfirm,
}) => {
    const { formErrors, validateName } = useEditModalError();
    const [newFloorPlanName, setNewFloorPlanName] = useState(currentFloorPlanName);
    const [newFloorPlanImage] = useState(currentFloorPlanImage);

    const handlePasswordBlur = () => {
        validateName(newFloorPlanName);
    };

    const handleConfirm = () => {
        const isNameValid = validateName(newFloorPlanName);

        if (isNameValid) {
            onConfirm(newFloorPlanName, newFloorPlanImage);
            hideModal();
        }
    };

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleConfirm} showConfirmButton={true}>
            <HeaderModal>Update Location</HeaderModal>
            <ItemsModal>
                <LabelModal>Floor Plan Name</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location name"
                    value={newFloorPlanName}
                    onChange={(e) => {
                        setNewFloorPlanName(e.target.value);
                        setCurrentFloorPlanName(e.target.value);
                    }}
                    onBlur={handlePasswordBlur}
                />
                {formErrors.name && <ErrorStyles>{formErrors.name}</ErrorStyles>}
            </ItemsModal>
        </Modal>
    );
};

export default EditFloorPlanModal;
