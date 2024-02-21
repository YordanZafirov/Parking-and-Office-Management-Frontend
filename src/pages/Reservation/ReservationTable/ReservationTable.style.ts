import styled from "styled-components";

export const ReservationTableStyle = styled.table`
  border-collapse: collapse;
  width: 100%;
  margin-top: 1rem;

  caption {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;