import { useQuery, useQueryClient } from 'react-query';
import { deleteLocation, getLocations, updateLocation } from '../../services/locationService';
import { useState } from 'react';
import useToken from '../../hooks/Token/Token.hook';

interface LocationData {
    name?: string;
    city: string;
    address: string;
    modifiedBy: string | undefined;
}

const useAdminPage = () => {
    const queryClient = useQueryClient();
    const { data: locations, isLoading, error } = useQuery('admin', () => getLocations());

    const [selectedLocationIdForDelete, setSelectedLocationIdForDelete] = useState<string | null>(null);
    const [selectedLocationIdForEdit, setSelectedLocationIdForEdit] = useState<string | null>(null);
    const [currentLocationName, setCurrentLocationName] = useState<string>('');
    const [currentLocationCity, setCurrentLocationCity] = useState<string>('');
    const [currentLocationAddress, setCurrentLocationAddress] = useState<string>('');
    const [originalLocationName, setOriginalLocationName] = useState<string>('');
    const [originalLocationCity, setOriginalLocationCity] = useState<string>('');
    const [originalLocationAddress, setOriginalLocationAddress] = useState<string>('');

    const decodedToken = useToken();

    const onDeleteLocation = async (locationId: string) => {
        try {
            await deleteLocation(locationId);
            queryClient.invalidateQueries('admin');
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    const onEditLocation = async (locationId: string, newLocationData: LocationData) => {
        try {
            if (newLocationData.name !== originalLocationName) {
                await updateLocation(locationId, newLocationData);
            } else {
                const { name: _, ...updatedLocationData } = newLocationData;
                await updateLocation(locationId, updatedLocationData);
            }

            queryClient.invalidateQueries('admin');
        } catch (error) {
            console.error('Error editing location:', error);
        }
    };

    const onDeleteClick = (soilId: string) => {
        setSelectedLocationIdForDelete(soilId);
    };

    const onEditClick = (locationId: string, locationName: string, locationCity: string, locationAddress: string) => {
        setSelectedLocationIdForEdit(locationId);
        setCurrentLocationName(locationName);
        setCurrentLocationCity(locationCity);
        setCurrentLocationAddress(locationAddress);
        setOriginalLocationName(locationName);
        setOriginalLocationCity(locationCity);
        setOriginalLocationAddress(locationAddress);
    };

    const onDeleteConfirm = async () => {
        if (selectedLocationIdForDelete) {
            await onDeleteLocation(selectedLocationIdForDelete);
            setSelectedLocationIdForDelete(null);
        }
    };

    const onEditConfirm = async () => {
        try {
            if (selectedLocationIdForEdit) {
                const newLocationData = {
                    name: currentLocationName,
                    city: currentLocationCity,
                    address: currentLocationAddress,
                    modifiedBy: decodedToken?.id,
                };

                await onEditLocation(selectedLocationIdForEdit, newLocationData);
                // Update the original values after edit is confirmed
                setOriginalLocationName(currentLocationName);
                setOriginalLocationCity(currentLocationCity);
                setOriginalLocationAddress(currentLocationAddress);
            }

            setSelectedLocationIdForEdit(null);
            setCurrentLocationName('');
            setCurrentLocationCity('');
            setCurrentLocationAddress('');
        } catch (error) {
            console.error('Error handling edit confirmation:', error);
        }
    };

    return {
        locations,
        isLoading,
        error,
        onDeleteClick,
        onEditClick,
        currentLocationName,
        setCurrentLocationName,
        currentLocationCity,
        setCurrentLocationCity,
        currentLocationAddress,
        setCurrentLocationAddress,
        onDeleteConfirm,
        onEditConfirm,
        originalLocationName,
        originalLocationCity,
        originalLocationAddress,
    };
};

export default useAdminPage;
