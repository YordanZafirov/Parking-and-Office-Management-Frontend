import styled from 'styled-components';

export const PageTitle = styled.h1`
    margin-top: 3rem;
    color: var(--dark-blue);
    text-align: center;
`;

export const Container = styled.div`
    max-width: 1500px;
    margin: auto;
    /* padding: 0 2rem; */
    overflow: hidden;
`;

export const BaseButton = styled.button`
    align-self: center;
    background-color: var(--green);
    border: transparent;
    border-radius: 0.7rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 500;
    line-height: 0.6rem;
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
        transform: translate3d(0, 2px, 0);
    }

    &.delete-btn,
    &.remove-btn {
        background-color: lightsteelblue;
        margin: 0.5rem;
    }

    &.spot-type-card {
        color: var(--light-pink);
        text-decoration: none;
        /* box-shadow: rgba(0, 0, 0, 0.1) 1px 25px -10px 0px; */
        width: 100;
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
        background-color: lightblue;
        margin: 0.5rem;
    }
    &.close-btn {
        background-color: transparent;
        position: relative;
        padding: 0.2rem;
        right: 0.5rem;
        top: 0.5rem;
        align-self: flex-end;
        margin: 0;
    }
    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }
`;
