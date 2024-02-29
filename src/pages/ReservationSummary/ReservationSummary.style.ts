import styled from 'styled-components';

const ReservationSummaryContainer = styled.div`
    padding: 20px;
`;

const ReservationSummaryList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 20px 0;
    display: grid;
    align-items: center;
    justify-content: center;
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    height: 100%;
    width: 50%;
    margin: 20px auto;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const ReservationSummaryNoItems = styled.div`
    text-align: center;
    margin: 20px 0;
`;

const ReservationSummaryListItem = styled.li`
    position: relative;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    margin-bottom: 10px;
`;

const ReservationRemveButton = styled.button`
    position: absolute;
    top: 5px;
    right: 5px;
    background-color: #dc3545;
    color: #fff;
    border: none;
    padding: 8px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
        background-color: #bd2130;
    }
`;

const SummaryButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 50%;
    margin: 20px auto;

    @media (max-width: 768px) {
        width: 80%;
        gap: 20px;
    }
`;

const ReservationSummaryButton = styled.button`
    display: block;
    background-color: var(--blue-green);
    color: #fff;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
    width: 10rem;
    margin: 0 auto;

    &:hover {
        background-color: #0056b3;
    }
`;

const AddNewReservationButton = styled(ReservationSummaryButton)`
    background-color: var(--brown-light);
`;

export {
    ReservationSummaryButton,
    ReservationSummaryContainer,
    ReservationSummaryList,
    ReservationSummaryListItem,
    ReservationSummaryNoItems,
    ReservationRemveButton,
    AddNewReservationButton,
    SummaryButtonContainer,
};
