import React, { useState } from 'react';
import Modal from '../../../components/ModalList/Modal';
import { HeaderModal, ItemsModal, LabelModal } from './EditModal.style';

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
    const [newLocationName, setNewLocationName] = useState(currentLocationName);
    const [newLocationCity, setNewLocationCity] = useState(currentLocationCity);
    const [newLocationAddress, setNewLocationAddress] = useState(currentLocationAddress);

    const handleConfirm = () => {
        onConfirm(newLocationName, newLocationCity, newLocationAddress);
        hideModal();
    };

    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={handleConfirm} showConfirmButton={true}>
            <HeaderModal>Update Location</HeaderModal>
            <ItemsModal>
                <LabelModal>Location Name</LabelModal>
                <input
                    type="text"
                    placeholder="Enter new location name"
                    value={newLocationName}
                    onChange={(e) => {
                        setNewLocationName(e.target.value);
                        setCurrentLocationName(e.target.value);
                    }}
                />
            </ItemsModal>
            <ItemsModal>
                <LabelModal>Location City</LabelModal>
                <input
                    type="text"
                    placeholder="Enter new location city"
                    value={newLocationCity}
                    onChange={(e) => {
                        setNewLocationCity(e.target.value);
                        setCurrentLocationCity(e.target.value);
                    }}
                />
            </ItemsModal>
            <ItemsModal>
                <LabelModal>Location Address</LabelModal>
                <input
                    type="text"
                    placeholder="Enter new location address"
                    value={newLocationAddress}
                    onChange={(e) => {
                        setNewLocationAddress(e.target.value);
                        setCurrentLocationAddress(e.target.value);
                    }}
                />
            </ItemsModal>
        </Modal>
    );
};

export default EditLocationModal;
