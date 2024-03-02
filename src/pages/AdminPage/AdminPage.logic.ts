import { useQuery } from 'react-query';
import { deleteLocation, getLocations, updateLocation } from '../../services/locationService';
import { useState } from 'react';
import useToken from '../../hooks/Token/Token.hook';
import { LocationData } from './AdminPage.static';
import { useNavigate } from 'react-router-dom';

const useAdminPage = () => {
    const { data: locations, isLoading, error, refetch } = useQuery('admin', () => getLocations());

    const [selectedLocationIdForDelete, setSelectedLocationIdForDelete] = useState<string | null>(null);
    const [selectedLocationIdForEdit, setSelectedLocationIdForEdit] = useState<string | null>(null);
    const [currentLocationName, setCurrentLocationName] = useState<string>('');
    const [currentLocationCity, setCurrentLocationCity] = useState<string>('');
    const [currentLocationAddress, setCurrentLocationAddress] = useState<string>('');
    const [originalLocationName, setOriginalLocationName] = useState<string>('');
    const [originalLocationCity, setOriginalLocationCity] = useState<string>('');
    const [originalLocationAddress, setOriginalLocationAddress] = useState<string>('');

    const decodedToken = useToken();
    const navigate = useNavigate();

    const handleCreateLocationClick = () => {
        navigate('/createLocation');
    };
    const handleManageUsersClick = () => {
        navigate('/user');
    };

    const onDeleteLocation = async (locationId: string) => {
        try {
            await deleteLocation(locationId);
            refetch();
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    const onEditLocation = async (locationId: string, newLocationData: LocationData) => {
        try {
            if (newLocationData.name !== originalLocationName) {
                await updateLocation(locationId, newLocationData);
            } else {
                const updatedLocationData = { ...newLocationData };
                if ('name' in updatedLocationData) {
                    delete updatedLocationData.name;
                }
                await updateLocation(locationId, updatedLocationData);
            }

            refetch();
        } catch (error) {
            console.error('Error editing location:', error);
        }
    };

    const onDeleteClick = (locationId: string) => {
        setSelectedLocationIdForDelete(locationId);
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
        handleCreateLocationClick,
        handleManageUsersClick,
    };
};

export default useAdminPage;
