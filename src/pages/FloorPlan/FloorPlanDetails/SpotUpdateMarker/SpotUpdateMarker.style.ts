import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';

const MarkerStyled = styled.div`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50% 50% 0 50%;
    background: var(--spot-green);
    display: inline-block;
    position: relative;
    transform: rotate(45deg);
    border: 0.1rem solid var(--blue-green-dark);
    cursor: pointer;

    &.custom-marker_true {
        background: red;
    }

    @media screen and (max-width: 800px) {
        width: 0.85rem;
        height: 0.85rem;
    }
    @media screen and (max-width: 640px) {
        width: 0.7rem;
        height: 0.7rem;
    }
    @media screen and (max-width: 400px) {
        width: 0.6rem;
        height: 0.6rem;
    }
    @media screen and (max-width: 300px) {
        width: 0.5rem;
        height: 0.5rem;
    }
`;

const StyledToolTip = styled(Tooltip)`
    &.spot-info {
        background: var(--beige);
        color: black;
        text-align: center;
        padding: 0.5rem;
        z-index: 1;
    }
`;

export { MarkerStyled, StyledToolTip };
