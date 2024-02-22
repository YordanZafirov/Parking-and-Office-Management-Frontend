import styled from 'styled-components';

export const SpotTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 20px;
    margin: 3rem auto;
    background-color: var(--blue-green);
    border-radius: 8px;
    text-align: center;

    a {
        color: var(--light-pink);
        text-decoration: none;
        display: flex;
        align-items: center;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        a {
            margin: 0 auto;
        }
    }
`;

export const SpotTypeCard = styled.div`
    background-color: var(--blue-green-light);
    width: 70%;
    height: 90%;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const SpotTypeParagraph = styled.p`
    font-size: 22px;
    margin-bottom: 20px;
`;

export const SpotTypeImage = styled.div`
    width: 90%;
    height: 200px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
`;
