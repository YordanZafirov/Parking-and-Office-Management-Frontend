import { useState } from 'react';
import { useEditModalError } from './EditModalErrors';

interface EditModalLogicProps {
    currentFloorPlanName: string;
    currentFloorPlanImage: string;
    onConfirm: (newFloorPlanName: string, newFloorPlanImage: string) => void;
    hideModal: () => void;
}

export const useEditFloorPlanModalLogic = ({
    currentFloorPlanName,
    currentFloorPlanImage,
    onConfirm,
    hideModal,
}: EditModalLogicProps) => {
    const { formErrors, validateName } = useEditModalError();
    const [newFloorPlanName, setNewFloorPlanName] = useState(currentFloorPlanName);
    const [newFloorPlanImage] = useState(currentFloorPlanImage);

    const handleFloorPlanBlur = () => {
        validateName(newFloorPlanName);
    };

    const handleConfirm = () => {
        const isNameValid = validateName(newFloorPlanName);

        if (isNameValid) {
            onConfirm(newFloorPlanName, newFloorPlanImage);
            hideModal();
        }
    };

    return {
        formErrors,
        newFloorPlanName,
        newFloorPlanImage,
        setNewFloorPlanName,
        handleFloorPlanBlur,
        handleConfirm,
    };
};
