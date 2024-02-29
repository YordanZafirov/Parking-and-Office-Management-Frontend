import styled from 'styled-components';

export const SpotTypeContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    padding: 10px;
    margin: 3rem auto;
    background-color: var(--blue-green);
    border-radius: 8px;
    text-align: center;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;

        a {
            margin: 0 auto;
        }
    }
`;

export const SpotTypeImageContainer = styled.div`
    width: 100%;
`;

export const SpotTypeParagraph = styled.p`
    font-size: 22px;
    margin-bottom: 10px;
`;

export const SpotTypeImage = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 8px;
    object-fit: cover;
`;
