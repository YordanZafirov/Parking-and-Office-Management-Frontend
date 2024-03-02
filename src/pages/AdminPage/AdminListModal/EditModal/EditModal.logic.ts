import { useState } from 'react';
import { useEditModalError } from './EditModalErrors';

interface EditModalLogicProps {
    currentLocationName: string;
    currentLocationCity: string;
    currentLocationAddress: string;
    onConfirm: (newLocationName: string, newLocationCity: string, newLocationAddress: string) => void;
    hideModal: () => void;
}

export const useEditLocationModalLogic = ({
    currentLocationName,
    currentLocationCity,
    currentLocationAddress,
    onConfirm,
    hideModal,
}: EditModalLogicProps) => {
    const { formErrors, validateName, validateCity, validateAddress } = useEditModalError();
    const [newLocationName, setNewLocationName] = useState(currentLocationName);
    const [newLocationCity, setNewLocationCity] = useState(currentLocationCity);
    const [newLocationAddress, setNewLocationAddress] = useState(currentLocationAddress);

    const handleLocationdBlur = () => {
        validateName(newLocationName);
        validateCity(newLocationCity);
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

    return {
        formErrors,
        newLocationName,
        newLocationCity,
        newLocationAddress,
        setNewLocationName,
        setNewLocationCity,
        setNewLocationAddress,
        handleLocationdBlur,
        handleConfirm,
    };
};
