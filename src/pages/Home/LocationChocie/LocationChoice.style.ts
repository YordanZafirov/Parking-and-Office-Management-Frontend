import styled from 'styled-components';

const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: var(--blue-green);
    border-radius: 8px;
    width: 100%;

    span {
        display: block;
        padding: 10px;
        margin: 15px auto;
        font-weight: bold;
        width: 50%;
        border-radius: 5px;
    }
`;

const LocationImage = styled.img`
    width: 100%;
    height: 200px;
    margin-bottom: 10px;
    border-radius: 8px;
    object-fit: cover;
`;

const DeleteButton = styled.div`
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    padding: 5px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
`;

export { DeleteButton, LocationImage, InformationContainer };
