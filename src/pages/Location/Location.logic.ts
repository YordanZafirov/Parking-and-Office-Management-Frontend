import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getLocation } from "../../services/locationService";

const useLocation = () => {
  const { id } = useParams();

  const {
    data: singleLocation,
    isLoading,
    error,
  } = useQuery(["location", id], () => {
    if (id) {
      return getLocation(id);
    }
  });

  return { singleLocation, isLoading, error };
};

export default useLocation;
