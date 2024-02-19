import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { get } from "../../services/fetchService";
import { endpoints } from "../../static/endpoints";

const useLocation = () => {
  const { id } = useParams();

  const { data: singleLocation, isLoading, error } = useQuery(
    ["location", id],
    () => get(endpoints.getLocations + "/" + id, {}),
  );

  return { singleLocation, isLoading, error };
};

export default useLocation;
