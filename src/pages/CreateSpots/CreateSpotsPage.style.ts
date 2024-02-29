import styled from 'styled-components';

const DivFlexStyled = styled.div`
    align-items: center;
    width: auto;
    padding: 1rem;

    .checkbox-label {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.4rem;
    }

    &.create-reservation-container {
        max-width: 100%;
        background-color: var(--blue-green-light);
    }

    .image-marker {
        .image-marker__marker {
            display: flex;
            justify-content: center;
        }
    }
`;

export { DivFlexStyled };
