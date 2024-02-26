import styled from 'styled-components';

const DivFlexStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 1rem;

    &.create-reservation-container {
        max-width: 100vw;
        background-color: var(--blue-green-light);
    }
`;

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { DivFlexStyled, ButtonsContainer };
