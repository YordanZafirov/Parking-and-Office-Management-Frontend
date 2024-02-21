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
        margin-right: 8px;
        width: 40px;
        height: 40px;
    }

    span {
        font-size: 16px;
        font-weight: bold;
    }
`;

export const UserProfileContainer = styled.div`
    margin: 30px auto;
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 20px;
    padding: 10px;
    max-width: 1500px;
    background-color: var(--beige-light);
    border-radius: 8px;
    overflow: hidden;
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
    border: 2px solid;
    margin-bottom: 10px;
`;
