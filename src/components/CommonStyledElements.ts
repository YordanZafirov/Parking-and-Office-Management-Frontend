import { styled } from 'styled-components';

export const PageTitle = styled.h1`
    margin-top: 3rem;
    color: var(--dark-blue);
    text-align: center;
`;

export const Container = styled.div`
    max-width: 1500px;
    margin: auto;
    padding: 0 2rem;
    overflow: hidden;
`;

export const BaseButton = styled.button`
    align-self: center;
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 10px;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem;
    text-decoration: none;
    transition: all 200ms ease-in-out;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    margin: 0.5rem;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px -5px;
    }

    &.delete-btn,
    &.remove-btn {
        background-color: lightsteelblue;
        margin: 0.5rem;
        width: 75px;
    }

    &.reservation-card {
        background-color: var(--beige);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn {
        background-color: var(--blue-green-light);
    }

    &.reservation-card {
        background-color: var(--blue-green-light);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn {
        background-color: var(--blue-green-light);
    }

    &.spot-type-card {
        color: var(--light-pink);
        text-decoration: none;

        width: 80%;
        margin: 0 auto;
        padding: 0;
        display: flex;

        align-items: center;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 3px -5px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            box-shadow: none;
            margin: 0 auto;
        }
    }

    &.edit-btn,
    &.create-btn {
        background-color: var(--blue-green-light);
        margin: 0.5rem;
    }
    &.close-btn {
        background-color: var(--brown);
        margin: 0.5rem;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

export const BigButtonLight = styled(BaseButton)`
    background-color: var(--beige-light);
    width: 150px;
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0.6rem;
`;
export const BigButtonDark = styled(BaseButton)`
    background-color: var(--blue--green-light);
    color: var(--beige-light);
    font-size: 0.8rem;
    line-height: 1rem;
    padding: 0.9rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const StyledCard = styled.div`
    background-color: var(--blue-green-light);
    width: 100%;
    height: 90%;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

export const FormButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
