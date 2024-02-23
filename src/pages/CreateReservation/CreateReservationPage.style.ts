import styled from 'styled-components';

const Card = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 35rem;
    width: auto;
    height: auto;
    margin: 1rem;
`;

const ImageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    /* margin:2rem; */
    padding: 1rem;
    justify-content: center;
    background-color: var(--beige-light);
    h3 {
        text-align: center;
        padding: 1rem;
    }
`;

const ImageStyled = styled.div`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    border-radius: 10px;
`;

export { Card, ImageContainer, ImageStyled };
