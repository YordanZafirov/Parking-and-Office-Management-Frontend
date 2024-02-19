import { useQuery } from "react-query";
import { get } from "../../services/fetchService";
import { endpoints } from "../../static/endpoints";

const useHome = () => {
  const {
    data: locations,
    isLoading,
    error,
  } = useQuery("home", () => get(endpoints.getLocations, {}));

  return { locations, isLoading, error };
}
 
export default useHome;