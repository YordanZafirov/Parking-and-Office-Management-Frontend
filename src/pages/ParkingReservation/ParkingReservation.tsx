import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  ParkingLotsContainer,
  ParkingLot,
  ReservedParkingTable,
  ReservedParkingTableHeader,
  ReservedParkingTableCell,
} from "./ParkingReservation.styled";

const ParkingReservation: React.FC = () => {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>(
    new Date()
  );
  const [selectedSpace, setSelectedSpace] = useState<number | null>(null);
  const [reservedParking, setReservedParking] = useState<
    Record<string, number[]>
  >({});

  const handleDateTimeChange = (date: Date | null) => {
    setSelectedDateTime(date);
  };

  const handleSpaceSelection = (spaceNumber: number) => {
    setSelectedSpace((prevSelectedSpace) =>
      prevSelectedSpace === spaceNumber ? null : spaceNumber
    );
  };

  const handleReservation = () => {
    if (selectedSpace !== null && selectedDateTime !== null) {
      setReservedParking((prevReservedParking) => {
        const dateString = selectedDateTime.toISOString().split("T")[0];
        const updatedReservedParking = { ...prevReservedParking };
        if (!updatedReservedParking[dateString]) {
          updatedReservedParking[dateString] = [];
        }
        const index = updatedReservedParking[dateString].indexOf(selectedSpace);
        if (index === -1) {
          updatedReservedParking[dateString].push(selectedSpace);
        } else {
          updatedReservedParking[dateString].splice(index, 1);
        }
        return updatedReservedParking;
      });

      // Reset state after reservation
      setSelectedSpace(null);
    } else {
      console.warn(
        "Please select a parking space and date before making a reservation."
      );
    }
  };

  return (
    <div>
      <h2>Parking Reservation</h2>
      <div>
        <DatePicker
          selected={selectedDateTime}
          onChange={handleDateTimeChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={60}
          dateFormat="MMMM d, yyyy h:mm aa"
        />
      </div>
      <ParkingLotsContainer>
        {[...Array(10)].map((_, index) => (
          <ParkingLot
            key={index}
            style={{
              backgroundColor:
                selectedSpace === index + 1
                  ? "blue"
                  : reservedParking[
                      selectedDateTime?.toISOString().split("T")[0]
                    ]?.includes(index + 1)
                  ? "red"
                  : "transparent",
            }}
            onClick={() => handleSpaceSelection(index + 1)}
          >
            {index + 1}
          </ParkingLot>
        ))}
      </ParkingLotsContainer>
      <div>
        <button
          onClick={handleReservation}
          disabled={selectedSpace === null || selectedDateTime === null}
        >
          Reserve Parking Space
        </button>
      </div>
      <ReservedParkingTable>
        <thead>
          <tr>
            <ReservedParkingTableHeader>Date</ReservedParkingTableHeader>
            <ReservedParkingTableHeader>
              Reserved Parking Lots
            </ReservedParkingTableHeader>
          </tr>
        </thead>
        <tbody>
          {Object.entries(reservedParking).map(([date, parkingLots]) => (
            <tr key={date}>
              <ReservedParkingTableCell>{date}</ReservedParkingTableCell>
              <ReservedParkingTableCell>
                {parkingLots.join(", ")}
              </ReservedParkingTableCell>
            </tr>
          ))}
        </tbody>
      </ReservedParkingTable>
    </div>
  );
};

export default ParkingReservation;
