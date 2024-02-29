import styled from 'styled-components';

const ContainerDivFlex = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 10px;
    max-width: 1500px;
    margin: 20px auto;
    padding: 0 2rem;
    overflow: hidden;
`;
const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    max-width: 1500px;
    margin: 20px auto;
    padding: 0 2rem;
    overflow: hidden;
`;

export { ContainerDivFlex, StyledContainer };
