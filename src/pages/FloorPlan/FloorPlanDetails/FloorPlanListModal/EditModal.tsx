import React, { useState } from 'react';

import Modal from '../../../../components/ModalList/Modal';
import { HeaderModal, InputModal, ItemsModal, LabelModal } from './EditModal.style';
import ImageInputField from '../../../../components/InputField/ImageInputField';
import { useCreateFloorPlan } from '../../CreateFloorPlan/CreateFloorPlan.logic';

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
    const [newFloorPlanName, setNewFloorPlanName] = useState(currentFloorPlanName);
    const [newFloorPlanImage, setNewFloorPlanImage] = useState(currentFloorPlanImage);

    const handleConfirm = () => {
        onConfirm(newFloorPlanName, newFloorPlanImage);
        hideModal();
    };

    const { formik, setImageFile } = useCreateFloorPlan();

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
                />
            </ItemsModal>

            <ImageInputField
                type="file"
                id="imgUrl"
                name="imgUrl"
                label="Image"
                placeholder="Please enter location's image"
                onChange={(event) => {
                    const file = event.currentTarget.files?.[0] || null;
                    setImageFile(file);
                    formik.handleChange(event);
                }}
            />

            {formik.errors.imgUrl && formik.touched.imgUrl && (
                <div className="error-message">{formik.errors.imgUrl}</div>
            )}
        </Modal>
    );
};

export default EditFloorPlanModal;
