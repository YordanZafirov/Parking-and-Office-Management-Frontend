import styled from "styled-components";

export const ParkingLotsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const ParkingLot = styled.div`
    width: 50px;
    height: 50px;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: pointer;
`;

export const ReservedParkingTable = styled.table`
    margin-top: 20px;
    border-collapse: collapse;
    width: 100%;
`;

export const ReservedParkingTableHeader = styled.th`
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
    background-color: #f2f2f2;
`;

export const ReservedParkingTableCell = styled.td`
    border: 1px solid #ddd;
    padding: 8px;
`;
