import React from 'react';
import Modal from '../../../components/ModalList/Modal';

interface DeleteModalProps {
    isVisible: boolean;
    hideModal: () => void;
    onDeleteConfirm: () => void;
}

const DeleteLocationModal: React.FC<DeleteModalProps> = ({ isVisible, hideModal, onDeleteConfirm }) => {
    return (
        <Modal isVisible={isVisible} hideModal={hideModal} onConfirm={onDeleteConfirm} showConfirmButton={true}>
            <p>Are you sure you want to delete this location?</p>
        </Modal>
    );
};

export default DeleteLocationModal;
