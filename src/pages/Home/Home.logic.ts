import { useQuery } from "react-query";
import { getLocations } from "../../services/locationService";

const useHome = () => {
  // Fetch all locations
  const {
    data: locations,
    isLoading,
    error,
  } = useQuery("home", () => getLocations());

  return { locations, isLoading, error };
};

export default useHome;
