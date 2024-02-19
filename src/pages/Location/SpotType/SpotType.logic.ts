import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSpotTypeByLocationId } from "../../../services/spotTypeService";

const useSpotType = () => {
  const { locationId } = useParams();
  const {
    data: spotTypeByLocationId,
    isLoading,
    error,
  } = useQuery(["spot", locationId], () => {
    if (locationId) {
      return getSpotTypeByLocationId(locationId);
    }
  });
  return { spotTypeByLocationId, isLoading, error };
};

export default useSpotType;
