import React, { useState } from 'react';
import Modal from '../../../../components/ModalList/Modal';
import { ErrorStyles, HeaderModal, InputModal, ItemsModal, LabelModal } from './EditModal.style';
import { useEditModalError } from './EditModalErrors';

interface EditModalProps {
    isVisible: boolean;
    hideModal: () => void;
    currentLocationName: string;
    currentLocationCity: string;
    currentLocationAddress: string;
    setCurrentLocationName: (newLocationName: string) => void;
    setCurrentLocationCity: (newLocationCity: string) => void;
    setCurrentLocationAddress: (newLocationAddress: string) => void;
    onConfirm: (newLocationName: string, newLocationCity: string, newLocationAddress: string) => void;
}

const EditLocationModal: React.FC<EditModalProps> = ({
    isVisible,
    hideModal,
    currentLocationName,
    currentLocationCity,
    currentLocationAddress,
    setCurrentLocationName,
    setCurrentLocationCity,
    setCurrentLocationAddress,
    onConfirm,
}) => {
    const { formErrors, validateName, validateCity, validateAddress } = useEditModalError();
    const [newLocationName, setNewLocationName] = useState(currentLocationName);
    const [newLocationCity, setNewLocationCity] = useState(currentLocationCity);
    const [newLocationAddress, setNewLocationAddress] = useState(currentLocationAddress);

    const handleNameBlur = () => {
        validateName(newLocationName);
    };

    const handleCityBlur = () => {
        validateCity(newLocationCity);
    };

    const handleAddressBlur = () => {
        validateAddress(newLocationAddress);
    };

    const handleConfirm = () => {
        const isNameValid = validateName(newLocationName);
        const isCityValid = validateCity(newLocationCity);
        const isAddressValid = validateAddress(newLocationAddress);

        if (isNameValid && isCityValid && isAddressValid) {
            onConfirm(newLocationName, newLocationCity, newLocationAddress);
            hideModal();
        }
    };

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleConfirm} showConfirmButton={true}>
            <HeaderModal>Update Location</HeaderModal>
            <ItemsModal>
                <LabelModal>Location Name</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location name"
                    value={newLocationName}
                    onChange={(e) => {
                        setNewLocationName(e.target.value);
                        setCurrentLocationName(e.target.value);
                    }}
                    onBlur={handleNameBlur}
                />
                {formErrors.name && <ErrorStyles>{formErrors.name}</ErrorStyles>}
            </ItemsModal>
            <ItemsModal>
                <LabelModal>Location City</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location city"
                    value={newLocationCity}
                    onChange={(e) => {
                        setNewLocationCity(e.target.value);
                        setCurrentLocationCity(e.target.value);
                    }}
                    onBlur={handleCityBlur}
                />
                {formErrors.city && <ErrorStyles>{formErrors.city}</ErrorStyles>}
            </ItemsModal>
            <ItemsModal>
                <LabelModal>Location Address</LabelModal>
                <InputModal
                    type="text"
                    placeholder="Enter new location address"
                    value={newLocationAddress}
                    onChange={(e) => {
                        setNewLocationAddress(e.target.value);
                        setCurrentLocationAddress(e.target.value);
                    }}
                    onBlur={handleAddressBlur}
                />
                {formErrors.address && <ErrorStyles>{formErrors.address}</ErrorStyles>}
            </ItemsModal>
        </Modal>
    );
};

export default EditLocationModal;
