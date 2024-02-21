import styled from 'styled-components';

const MarkerStyled = styled.button`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 1.2rem;
    background: var(--red);

    display: inline-block;
    border-bottom-right-radius: 0;
    position: relative;
    transform: rotate(45deg);
    cursor: pointer;
    border: 0.1rem solid #881100;
`;

export { MarkerStyled };