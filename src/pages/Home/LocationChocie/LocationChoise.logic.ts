import { deleteLocation } from "../../../services/locationService";
import useHome from "../Home.logic";

const useLocationChoice = () => {
    const { refetch } = useHome();

    const onDeleteLocation = async (locationId: string) => {
        try {
            await deleteLocation(locationId);
            refetch();
        } catch (error) {
            console.error(`Error deleting location with ID ${locationId}:`, error);
        }
    };

    const onDeleteClick = (locationId: string) => {
        onDeleteLocation(locationId);
    };

    return {
        onDeleteClick,
    };
};

export default useLocationChoice;
