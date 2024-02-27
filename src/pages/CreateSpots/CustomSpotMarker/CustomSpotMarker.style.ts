import styled from 'styled-components';

const MarkerStyled = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
    background: var(--spot-green);
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
    border: 0.1rem solid var(--blue-green-dark);
    
    @media screen and (max-width:800px) {
        width: 0.85rem;
        height: 0.85rem;
    }
    @media screen and (max-width: 640px) {
        width: 0.7rem;
        height: 0.7rem;
    }
    @media screen and (max-width: 400px) {
        width: 0.5rem;
        height: 0.5rem;
    }
    @media screen and (max-width: 300px) {
        width: 0.4rem;
        height: 0.4rem;
    }
`;

export { MarkerStyled };
