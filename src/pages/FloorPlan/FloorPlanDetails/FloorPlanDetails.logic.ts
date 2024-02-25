import { useState } from 'react';
import { deleteFloorPlan, getFloorPlans } from '../../../services/floorPlanService';
import { useQuery } from 'react-query';

const useFloorPlanDetails = () => {
    const { refetch } = useQuery('floorPlan', () => getFloorPlans());

    const [selectedFloorPlanIdForDelete, setSelectedFloorPlanIdForDelete] = useState<string | null>(null);
    // const [selectedLocationIdForEdit, setSelectedLocationIdForEdit] = useState<string | null>(null);
    // const [currentLocationName, setCurrentLocationName] = useState<string>('');
    // const [currentLocationCity, setCurrentLocationCity] = useState<string>('');
    // const [currentLocationAddress, setCurrentLocationAddress] = useState<string>('');
    // const [originalLocationName, setOriginalLocationName] = useState<string>('');
    // const [originalLocationCity, setOriginalLocationCity] = useState<string>('');
    // const [originalLocationAddress, setOriginalLocationAddress] = useState<string>('');

    const onDeleteFloorPlan = async (floorPlanId: string) => {
        try {
            console.log('Deleting floor plan...');
            await deleteFloorPlan(floorPlanId);
            console.log('Floor plan deleted successfully');

            await refetch({ queryKey: ['floorPlan', floorPlanId] }).then((result) => {
                console.log('Refetch result:', result);
            });
        } catch (error) {
            console.error('Error deleting floor plan:', error);
        }
    };

    // const onEditLocation = async (locationId: string, newLocationData: LocationData) => {
    //     try {
    //         if (newLocationData.name !== originalLocationName) {
    //             await updateLocation(locationId, newLocationData);
    //         } else {
    //             const { name: _, ...updatedLocationData } = newLocationData;
    //             await updateLocation(locationId, updatedLocationData);
    //         }

    //         refetch();
    //     } catch (error) {
    //         console.error('Error editing location:', error);
    //     }
    // };

    const onDeleteClick = (floorPlanId: string) => {
        setSelectedFloorPlanIdForDelete(floorPlanId);
    };

    // const onEditClick = (locationId: string, locationName: string, locationCity: string, locationAddress: string) => {
    //     setSelectedLocationIdForEdit(locationId);
    //     setCurrentLocationName(locationName);
    //     setCurrentLocationCity(locationCity);
    //     setCurrentLocationAddress(locationAddress);
    //     setOriginalLocationName(locationName);
    //     setOriginalLocationCity(locationCity);
    //     setOriginalLocationAddress(locationAddress);
    // };

    const onDeleteConfirm = async () => {
        if (selectedFloorPlanIdForDelete) {
            await onDeleteFloorPlan(selectedFloorPlanIdForDelete);
            setSelectedFloorPlanIdForDelete(null);
        }
    };

    // const onEditConfirm = async () => {
    //     try {
    //         if (selectedLocationIdForEdit) {
    //             const newLocationData = {
    //                 name: currentLocationName,
    //                 city: currentLocationCity,
    //                 address: currentLocationAddress,
    //                 modifiedBy: decodedToken?.id,
    //             };

    //             await onEditLocation(selectedLocationIdForEdit, newLocationData);
    //         }

    //         setSelectedLocationIdForEdit(null);
    //         setCurrentLocationName('');
    //         setCurrentLocationCity('');
    //         setCurrentLocationAddress('');
    //     } catch (error) {
    //         console.error('Error handling edit confirmation:', error);
    //     }
    // };

    return {
        onDeleteClick,
        onDeleteConfirm,
    };
};

export default useFloorPlanDetails;
