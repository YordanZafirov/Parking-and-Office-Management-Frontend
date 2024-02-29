import styled from 'styled-components';

const CalendarContainer = styled.div`
    background-color: var(--blue-green-light);
    text-align: center;
    /* padding: 20px; */
    max-width: 600px;
    width: auto;

    /* @media screen and (max-width: 470px) {
        padding: 10px;
    } */
    @media screen and (max-width: 400px) {
        padding: 0;
    }
`;

const StyledAppContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: stretch;
    border-radius: 10px;
    background-color: var(--beige);
    font-family: Arial, sans-serif;

    &.outer-container {
        flex-direction: column;
        justify-content: center;
    }

    @media screen and (max-width: 640px) {
        flex-direction: column;
    }
    @media screen and (max-width: 400px) {
        font-size: 0.8rem;
        &.outer-container,
        .calendar {
            padding: 0;
            width: auto;
        }
    }
`;

const StyledCalendarContainer = styled.div`
    flex: 1;

    .rdrCalendarWrapper {
        border-radius: 10px;
        border: 1px solid var(--brown);
        @media screen and (max-width: 400px) {
            max-width: 270px;
            padding: 0;
        }
    }

    .rdrStaticRanges button {
        color: black !important;
    }

    .rdrDefinedRangesWrapper {
        display: none;
    }
`;

const StyledTimePickerContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: stretch;
    @media screen and (max-width: 640px) {
        flex-direction: column;
        padding-top: 10px;
    }
`;

const StyledTimePicker = styled.div`
    background-color: #ffffff;
    border: 1px solid var(--brown);
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

    @media screen and (max-width: 640px) {
        & label {
            padding-top: 10px;
            padding-bottom: 10px;
        }
    }
`;

export { CalendarContainer, StyledTimePicker, StyledTimePickerContainer, StyledAppContainer, StyledCalendarContainer };
