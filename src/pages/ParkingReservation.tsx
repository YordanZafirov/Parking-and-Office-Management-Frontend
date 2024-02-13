import React, { useState } from "react";
import Calendar, { Value, Range, ValuePiece } from "react-calendar";
import "react-calendar/dist/Calendar.css";

const ParkingReservation: React.FC = () => {
    const [selectedDateTime, setSelectedDateTime] = useState<Value>(new Date());
    const [selectedSpace, setSelectedSpace] = useState<number | null>(null);

    const handleDateTimeChange = (value: Value | Range<ValuePiece>) => {
        if (value instanceof Date) {
            setSelectedDateTime(value);
        } else {
            console.warn("Date range selection is not supported in this example.");
        }
    };

    const handleSpaceSelection = (spaceNumber: number) => {
        setSelectedSpace(spaceNumber);
    };

    const handleReservation = () => {
        if (selectedSpace !== null) {
            console.log("Reserved parking space:", selectedSpace);
            console.log("Reserved date:", selectedDateTime);
            // Implement your reservation logic here

            // Reset state after reservation
            setSelectedSpace(null);
            setSelectedDateTime(new Date());
        } else {
            console.warn("Please select a parking space before making a reservation.");
        }
    };

    return (
        <div>
            <h2>Parking Reservation</h2>
            <div>
                <Calendar onChange={(value) => handleDateTimeChange(value)} value={selectedDateTime} locale="en" />
            </div>
            <div>
                <p>Select a parking space:</p>
                <button onClick={() => handleSpaceSelection(1)}>Space 1</button>
                <button onClick={() => handleSpaceSelection(2)}>Space 2</button>
                <button onClick={() => handleSpaceSelection(3)}>Space 3</button>
                {/* Add more buttons for additional spaces */}
            </div>
            <div>
                <button onClick={handleReservation} disabled={selectedSpace === null}>
                    Reserve Parking Space
                </button>
            </div>
        </div>
    );
};

export default ParkingReservation;
