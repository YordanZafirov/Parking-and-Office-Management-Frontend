import { HTMLAttributes } from 'react';
import styled from 'styled-components';

interface ModalProps extends HTMLAttributes<HTMLDivElement> {
    $show: boolean;
    $confirmation?: boolean;
}

const ModalOverlay = styled.div<ModalProps>`
    display: ${($props) => ($props.$show ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;

const StyledModalContainer = styled.div<ModalProps>`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--beige-light);
    padding: 20px;
    border-radius: 5px;
    text-align: center;
    padding-left: ${(props) => (props.$confirmation ? '20px' : '40px')};
    padding-right: ${(props) => (props.$confirmation ? '20px' : '40px')};
`;

const ModalContent = styled.div`
    color: black;
    font-size: 1.2rem;
`;

const ModalActions = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
`;

const ModalButton = styled.button`
    padding: 10px 20px;
    margin: 0 10px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    outline: none;
`;

export { ModalButton, ModalActions, ModalContent, ModalOverlay, StyledModalContainer };
