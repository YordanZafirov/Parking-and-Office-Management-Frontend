import styled from 'styled-components';
import { Tooltip } from 'react-tooltip';

const MarkerStyled = styled.div`
    width: 1rem;
    height: 1rem;
    border-radius: 100%;
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
`;

const StyledToolTip = styled(Tooltip)`
    &.spot-info {
        background: var(--beige-light);
        color: black;
        text-align: center;
        padding: 0.5rem;
        z-index: 1;
    }
`;

export { MarkerStyled, StyledToolTip };
