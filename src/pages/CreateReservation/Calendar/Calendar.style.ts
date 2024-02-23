import styled from "styled-components";

export const CalendarContainer = styled.div`
    background-color: var(--blue-green-light);
    text-align: center;
    padding: 20px;
    max-width: 600px;
`;
export const HomeContainer = styled.div`
    margin: 30px;
`;

export const StyledAppContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    padding: 20px;
    border-radius: 10px;
    background-color:var(--beige);
    font-family: Arial, sans-serif;

    &.outer-container{
        flex-direction: column;
        justify-content: center;
    }
`;

export const StyledCalendarContainer = styled.div`
    flex: 1;

    .rdrCalendarWrapper {
        border-radius: 10px;
        border: 1px solid var( --brown);
    }

    .rdrStaticRanges button {
        color: black !important;
    }

    .rdrDefinedRangesWrapper {
        display: none;
    }
`;

export const StyledTimePickerContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: stretch;
`;

export const StyledTimePicker = styled.div`
    background-color: #ffffff;
    border: 1px solid var( --brown);
    border-radius: 10px;
    padding: 25px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .custom-time-picker {
        color: black;
    }
`;
