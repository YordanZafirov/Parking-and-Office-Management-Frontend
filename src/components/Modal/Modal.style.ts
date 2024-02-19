import styled from 'styled-components';

const ModalOverlay = styled.div`
    z-index: 200;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBox = styled.div`
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

    h4 {
        color: black;
        text-align: center;
    }

    p {
        text-align: center;
        padding: 1rem;
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

export { ModalBox, ModalOverlay };
