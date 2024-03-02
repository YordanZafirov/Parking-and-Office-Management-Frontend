import { Tooltip } from 'react-tooltip';
import { styled } from 'styled-components';

const PageTitle = styled.h1`
    margin-top: 3rem;
    color: var(--dark-blue);
    text-align: center;
`;

const Container = styled.div`
    max-width: 93.75rem;
    margin: auto;
    padding: 0 2rem;
    overflow: hidden;
`;

const BaseButton = styled.button`
    align-self: center;
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 0.625rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
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
        box-shadow: darkgrey 15px 15px 18px -18px;
        display: flex;
        align-items: center;

        &:hover {
            box-shadow: rgba(0, 0, 0, 0.1) 2px 3px 3px -5px;
        }

        @media (max-width: 768px) {
            grid-template-columns: 1fr;
            width: 100%;
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

const BigButtonLight = styled(BaseButton)`
    background-color: var(--beige-light);
    width: 15.625rem;
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.6rem;
    font-size: 1.2rem;
    line-height: 1.2;

    @media (max-width: 930px) {
        width: 80%;
    }
`;
const BigButtonDark = styled(BaseButton)`
    background-color: var(--blue--green-light);
    color: var(--beige-light);
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.9rem;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const BaseButtonLogout = styled.button`
    align-self: center;
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 0.625rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 500;
    outline: none;
    padding: 0.6rem 1rem 0.6rem 1rem;
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
    }

    &.reservation-card {
        background-color: var(--beige);
        padding: 0;
        max-width: 10rem;
    }

    &.reservation-btn,
    &.reservation-card {
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
            width: 100%;
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

    svg {
        margin-left: 0.7rem;
        margin-right: 0.3rem;
        height: 1.5rem;
        width: 1.5rem;
    }

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;

const StyledCard = styled.div`
    background-color: var(--blue-green-light);
    width: 100%;
    height: 90%;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    padding: 1.25rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.home-card {
        width: 90%;
    }
`;

const FormButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledToolTip = styled(Tooltip)`
    &.spot-info {
        background: var(--beige);
        color: black;
        text-align: center;
        padding: 0.5rem;
        z-index: 2;
    }
    & p {
        text-align: center;
    }
`;
export {
    StyledToolTip,
    FormButtonsContainer,
    BaseButton,
    BigButtonDark,
    BigButtonLight,
    StyledCard,
    PageTitle,
    Container,
    BaseButtonLogout,
};
