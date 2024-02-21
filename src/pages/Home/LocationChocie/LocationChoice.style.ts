import styled from 'styled-components';

export const InformationContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #e7f5ff;
    width: 100%;

    span {
        display: block;
        padding: 10px;
        margin: 15px auto;
        background-color: #1971c2;
        color: #fff;
        font-weight: bold;
        width: 50%;
        border-radius: 5px;
    }
`;

export const LocationImage = styled.img`
    width: 100%;
    height: 200px;
    padding: 10px;
    object-fit: cover;
`;

export const DeleteButton = styled.div`
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
    /* 
    &:hover {
        background-color: #fff;
    } */
`;
