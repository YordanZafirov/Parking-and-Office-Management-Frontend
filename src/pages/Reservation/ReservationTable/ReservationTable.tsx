import { useEffect } from "react";
import useReservationTableLogic from "./ReservationTable.logic";

const ReservationTable = () => {
  const {
    allFutureReservationsByUserId,
    spotId,
    singleSpot,
    singleSpotTypeId,
    singleSpotType,
  } = useReservationTableLogic();

  useEffect(() => {
    console.log(
      "allFutureReservationsByUserId ",
      allFutureReservationsByUserId
    );
    console.log("spotId ", spotId);
    console.log("singleSpot ", singleSpot);
    console.log("singleSpotTypeId ", singleSpotTypeId);

    console.log("singleSpotType ", singleSpotType);
  }, [
    allFutureReservationsByUserId,
    spotId,
    singleSpot,
    singleSpotTypeId,
    singleSpotType,
  ]);

  return (
    <table>
      <caption>My reservations</caption>
      <thead>
        <tr>
          <th>Spot</th>
          <th>Start</th>
          <th>End</th>
          <th>Comment</th>
          <th>Spot Description</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  );
};

export default ReservationTable;
