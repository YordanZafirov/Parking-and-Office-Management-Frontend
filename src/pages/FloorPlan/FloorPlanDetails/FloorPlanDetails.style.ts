import styled from 'styled-components';

const FloorPlanDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 20px;

    @media (max-width: 768px) {
        padding: 10px;
    }
`;

const HeadingFloorPlan = styled.h2`
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

const ImageStyled = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 10px;

    @media screen and (max-width: 900px) {
        width: 60%;
    }
    @media screen and (max-width: 780px) {
        width: 70%;
    }

    @media screen and (max-width: 640px) {
        width: 80%;
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
