import styled from 'styled-components';

const NotFoundContainer = styled.div`
    text-align: center;
    margin-top: 50px;

    @media (max-width: 768px) {
        padding: 40px;
    }
`;

const NotFoundTitle = styled.h1`
    color: #ff6347;
`;

const GoToHome = styled.h1`
    text-decoration: none;
`;

const StyledButton = styled.a`
    background-color: var(--blue-green-light);
    border: transparent;
    border-radius: 0.7rem;
    box-shadow: darkgrey 15px 28px 25px -18px;
    box-sizing: border-box;
    color: black;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
    line-height: 0.6rem;
    outline: none;
    padding: 1rem;
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

    @media (max-width: 200px) {
        line-height: 1rem;
    }
`;

export { StyledButton, GoToHome, NotFoundContainer, NotFoundTitle };
