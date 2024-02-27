import styled from "styled-components";

export const StyledCalendarIcon = styled.div`
  position: relative;
  cursor: pointer;
  padding-right: 25px;

  .calendar-icon {
    height: 25px;
    width: 25px;
    transition: transform 0.3s ease-in-out;
    color: #000;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    margin-left: 30px;
    color: #fff;
  }
`;

export const CalendarCount = styled.span`
  position: absolute;
  top: 0;
  right: -10px;
  background-color: #3498db;
  color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;