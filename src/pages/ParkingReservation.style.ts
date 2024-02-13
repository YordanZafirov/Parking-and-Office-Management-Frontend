import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
`;

export const CalendarInput = styled.input`
    font-family: "Noto Sans", sans-serif;
    padding: 8px;
    font-size: 14px;
`;

export const ParkingSlotContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
`;

export const ParkingSpace = styled.button<{ reserved?: boolean }>`
    width: 80px;
    height: 80px;
    border: none;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    background-color: ${(props) => (props.reserved ? "red" : "green")};
    color: ${(props) => (props.reserved ? "white" : "black")};
    font-family: "Noto Sans", sans-serif;
`;

export const TimeSlotContainer = styled.div`
    margin-top: 20px;
`;
