import React from "react";
import ParkingReservation from "./pages/ParkingReservation";
import styled from "styled-components";

export const Container = styled.div`
    margin-left: 80px;
`;

const App: React.FC = () => {
    return (
        <Container>
            <h1>My Parking App</h1>
            <ParkingReservation />
        </Container>
    );
};

export default App;
