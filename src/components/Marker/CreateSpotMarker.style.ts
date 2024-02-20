import styled from 'styled-components';

const Container = styled.section`
    display: flex;
    flex-direction: column;
    //place-content: center;
    align-items: center;
    justify-content: center;
    justify-items: center;
    align-content: center;
    flex-wrap: wrap;
    width: auto;
    height: 100vh;
`;

const DivFlexStyled = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;

    width: auto;
`;

const Option = styled.option`
    font-size: var(--font-size-sm);
    font-weight: 400;
    width: 250px;
    color: var(--dark-grey);
    padding: 10px 14px;
    margin-bottom: 1rem;
    min-height: 1em;
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
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
`;

const FormStyled = styled.form`
    // margin: 1rem auto;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-content: flex-start;
    width: auto;
    height: auto;
    min-width: 300px;
    background-color: white;
    border-radius: 0.5rem;
    box-shadow: 0 10px 20px 0 darkgrey;
    padding: 0.3rem;
    z-index: 20;

    h3 {
        color: black;
        text-align: center;
    }
`;

export { Container, DivFlexStyled, ButtonsContainer, Button, FormStyled, Option };
