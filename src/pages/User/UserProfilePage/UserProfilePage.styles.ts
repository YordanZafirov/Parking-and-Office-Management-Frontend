import styled from 'styled-components';

const ToggleButtonsContainer = styled.div`
    max-width: 93.75rem;
    display: flex;
    gap: 1.875rem;
    margin: 5rem auto 1.875rem;
    padding: 0 2rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    border-radius: 0.5rem;

    @media (max-width: 768px) {
        margin: 1.25rem auto 1.875rem;
        flex-direction: column;
        gap: 0.3125rem;
    }
`;

const UpdateButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 0.625rem;
    gap: 0.625rem;
`;

const StyledDetailBullet = styled.li`
    display: flex;
    align-items: center;
    margin: 0.5rem 1.25rem;
    background-color: var(--beige-light);
    padding: 0.5rem;
    border-radius: 0.25rem;
    overflow: hidden;
    img {
        margin-top: 0.1875rem;
        margin-right: 0.3125rem;
        width: 2.5rem;
        height: 2.5rem;
    }

    span {
        margin-bottom: 0.1875rem;
        font-size: 1rem;
        font-weight: bold;
    }
`;

const UserProfileContainer = styled.div`
    margin: 1.875rem 0.625rem;
    display: grid;
    grid-template-columns: 60% 40%;
    padding: 0.625rem;
    max-width: 93.75rem;
    border-radius: 0.5rem;
    overflow: hidden;

    @media (min-width: 1500px) {
        margin: 1.875rem auto;
    }
    @media (max-width: 715px) {
        grid-template-columns: 1fr;
        > :nth-child(2) {
            display: none;
        }
    }
    @media (max-width: 510px) {
        margin: 0.625rem;
    }
`;

const UserAdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;
    background-color: var(--brown);
    border-radius: 0.5rem;
    text-align: center;
    justify-content: center;
`;
const UserMainInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;
    background-color: var(--blue-green);
    padding: 0.625rem;
    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 510px) {
        flex-direction: column;
    }
`;
const UserProfilePictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.625rem auto;
    width: 90%;
    height: 90%;

    border-radius: 0.5rem;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const UserProfilePicture = styled.img`
    border-radius: 50%;
    width: 12.5rem;
    height: 12.5rem;
    object-fit: cover;
    border: 0.1875rem solid var(--blue-green-light);
    margin-bottom: 0.625rem;
`;

const UserProfileEmail = styled.p`
    font-size: 1.2rem;
`;

export {
    ToggleButtonsContainer,
    UpdateButtonContainer,
    StyledDetailBullet,
    UserAdditionalInfoContainer,
    UserProfileContainer,
    UserMainInfoContainer,
    UserProfilePicture,
    UserProfilePictureContainer,
    UserProfileEmail,
};
