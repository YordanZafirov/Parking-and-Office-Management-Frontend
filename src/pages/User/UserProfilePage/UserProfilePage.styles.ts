import styled from 'styled-components';

export const ToggleButtonsContainer = styled.div`
    max-width: 1500px;
    display: flex;
    gap: 30px;
    margin: 80px auto 30px;
    padding: 0 2rem;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    border-radius: 8px;

    @media (max-width: 520px) {
        margin: 20px auto 30px;
        flex-direction:column;
        gap: 5px;
    }
`;

export const UpdateButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    gap: 10px;
`;

export const StyledDetailBullet = styled.li`
    display: flex;
    align-items: center;
    margin: 8px 20px;
    background-color: var(--beige-light);
    padding: 8px;
    border-radius: 4px;
    overflow: hidden;
    img {
        margin-top: 3px;
        margin-right: 5px;
        width: 40px;
        height: 40px;
    }

    span {
        margin-bottom: 3px;
        font-size: 16px;
        font-weight: bold;
    }
`;

export const UserProfileContainer = styled.div`
    margin: 30px 10px;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 20px;
    padding: 10px;
    max-width: 1500px;
    border-radius: 8px;
    overflow: hidden;

    @media (min-width: 1500px) {
        margin: 30px auto;
    }
    @media (max-width: 715px) {
        grid-template-columns: 1fr;
        > :nth-child(2) {
            display: none;
        }
    }
    @media (max-width: 510px) {
        margin: 10px;
    }
`;

export const UserAdditionalInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 90%;
    height: 90%;
    background-color: var(--brown);
    border-radius: 8px;
    text-align: center;
    justify-content: center;


`;
export const UserMainInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 10px auto;
    width: 90%;
    height: 90%;
    background-color: var(--blue-green);
    padding: 10px;
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 510px) {
        flex-direction:column;
    }
`;
export const UserProfilePictureContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px auto;
    width: 90%;
    height: 90%;
    /* background-color: lightskyblue; */
    border-radius: 8px;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

export const UserProfilePicture = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
    object-fit: cover;
    border: 3px solid var(--blue-green-light);
    margin-bottom: 10px;
`;
