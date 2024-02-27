import { useQuery } from 'react-query';
import { getSpotById } from '../../services/spotService';

const useReservationSummary = (spotId: string) => {
    const {
        data: spotName,
        isLoading,
        error,
    } = useQuery(['spotName', spotId], () => getSpotById(spotId), {
        enabled: !!spotId,
    });
    return { spotName, isLoading, error };
};

export default useReservationSummary;
