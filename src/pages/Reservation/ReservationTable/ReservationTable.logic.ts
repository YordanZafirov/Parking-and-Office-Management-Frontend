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

  const { id: spotId } = allFutureReservationsByUserId || {};

  // const {
  //   data: singleSpot,
  //   isLoading: spotLoading,
  //   error: spotError,
  // } = useQuery(["spot", spotId], () => {
  //     return getSpotById(spotId);
  // });

  // const { id: spotTypeId } = singleSpot || {};

  // const {
  //   data: singleSpotType,
  //   isLoading: spotTypeLoading,
  //   error: spotTypeError,
  // } = useQuery(["spotType", spotTypeId ?? ""], () => {
  //     return getSpotType(spotTypeId);
  // });

  return {
    allFutureReservationsByUserId,
    futureReservationsByUserIdLoading,
    futureReservationsByUserIdError,
    spotId
    // singleSpot,
    // spotLoading,
    // spotError,
    // singleSpotType,
    // spotTypeLoading,
    // spotTypeError,
  };
};

export default useReservationTableLogic;
