import { useQuery } from "react-query";
import useToken from "../../../hooks/Token/Token.hook";
import { getFutureReservationsByUserId } from "../../../services/reservationService";
import { getSpotById } from "../../../services/spotService";
import { getSpotType } from "../../../services/spotTypeService";

const useReservationTableLogic = () => {
  const decodedToken = useToken();
  const { id: userId } = decodedToken || {};
  const {
    data: allFutureReservationsByUserId,
    isLoading: futureReservationsByUserIdLoading,
    error: futureReservationsByUserIdError,
  } = useQuery(["reservationByUserId", userId], () => {
    if (userId) {
      return getFutureReservationsByUserId(userId);
    }
  });

  const spotId = allFutureReservationsByUserId?.[0]?.spotId;

  const {
    data: singleSpot,
    isLoading: spotLoading,
    error: spotError,
    // refetch: refetchSpot,
  } = useQuery(["spot", spotId ?? ""], () => {
    return getSpotById(spotId);
  });

  const singleSpotTypeId = singleSpot?.spotTypeId;

  const {
    data: singleSpotType,
    isLoading: spotTypeLoading,
    error: spotTypeError,
  } = useQuery(["spotType", singleSpotTypeId ?? ""], () => {
    return getSpotType(singleSpotTypeId);
  });

  return {
    allFutureReservationsByUserId,
    futureReservationsByUserIdLoading,
    futureReservationsByUserIdError,
    spotId,
    singleSpotTypeId,
    singleSpot,
    spotLoading,
    spotError,
    singleSpotType,
    spotTypeLoading,
    spotTypeError,
  };
};

export default useReservationTableLogic;
