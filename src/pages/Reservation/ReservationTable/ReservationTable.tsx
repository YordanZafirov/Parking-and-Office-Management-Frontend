import { useEffect } from "react";
import useToken from "../../../hooks/Token/Token.hook";
import useReservationTableLogic from "./ReservationTable.logic";

const ReservationTable = () => {
  const decodedToken = useToken();
  const { allFutureReservationsByUserId, spotId } = useReservationTableLogic();
  // const { id } = decodedToken;

  useEffect(() => {
    console.log(
      "allFutureReservationsByUserId ",
      allFutureReservationsByUserId
    );
    console.log("spotId ", spotId);
    console.log("singleSpot ", spotId);
  }, [allFutureReservationsByUserId, spotId]);

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
