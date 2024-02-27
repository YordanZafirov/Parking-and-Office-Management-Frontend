import styled from 'styled-components';

const DivFlexStyled = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: auto;
    padding: 1rem;

    &.create-reservation-container {
        max-width: 100%;
        background-color: var(--blue-green-light);
    }

    .image-marker{
        .image-marker__marker{
            display: flex;
            justify-content: center;
        }
    }
`;


export { DivFlexStyled, ButtonsContainer };
