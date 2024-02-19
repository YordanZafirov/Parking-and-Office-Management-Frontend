import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getSpotTypeByLocationId } from "../../../services/spotTypeService";

const useSpotType = () => {
  const { id } = useParams();
  console.log(id);
  const {
    data: spotTypeByLocationId,
    isLoading,
    error,
  } = useQuery(["spot", id ?? ""], () => {
    
    return getSpotTypeByLocationId(id ?? "");
  });
  return { spotTypeByLocationId, isLoading, error };
};

export default useSpotType;
