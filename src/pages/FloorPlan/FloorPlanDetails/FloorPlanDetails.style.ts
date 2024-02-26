import styled from 'styled-components';

export const FloorPlanDetailsContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;

export const HeadingFloorPlan = styled.h2`
    display: flex;
    justify-content: center;
    /* flex-direction: column; */
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        padding: 20px;
    }
`;
