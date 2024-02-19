import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { get } from "../../../services/fetchService";

const useSpotChoice = () => {
  const { locationId } = useParams();
  const {
    data: spot,
    isLoading,
    error,
  } = useQuery(["spot", locationId], () => get(``, {}));
  return { spot, isLoading, error };
};

export default useSpotChoice;
