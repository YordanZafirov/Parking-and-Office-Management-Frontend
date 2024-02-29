import styled from 'styled-components';

const FloorPlanDetailsContainer = styled.div`
    padding: 1rem;

    @media (max-width: 768px) {
        padding: 0;
    }
`;

const HeadingFloorPlan = styled.h2`
    text-align: center;
    padding-bottom: 40px;

    @media (max-width: 768px) {
        padding-bottom: 20px;
    }
`;

const ImageStyled = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 60%;

    @media screen and (max-width: 780px) {
        width: 70%;
    }

    @media screen and (max-width: 400px) {
        width: 100%;
    }

    .image-marker {
        .image-marker__marker {
            display: flex;
            justify-content: center;
        }
    }
`;

export { ImageStyled, FloorPlanDetailsContainer, HeadingFloorPlan };
