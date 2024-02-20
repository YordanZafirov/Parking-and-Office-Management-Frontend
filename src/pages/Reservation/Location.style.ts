import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    align-items: baseline;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`;

export const StyledLabel = styled.label`
    margin-bottom: 5px;
`;

export const StyledInput = styled.input`
    box-sizing: border-box;
    width: calc(20% - 10px);
    padding: 10px;
    background-color: white;
    border-radius: 5px;
    color: black;
    height: 4vh;
    margin-right: 10px;
`;

export const StyledSelect = styled.select`
    width: 15%;
    padding: 8px;
    color: black;
    border: none;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const StyledButton = styled.button`
    width: 15%;
    padding: 8px;
    background-color: #0056b8;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    span {
        font-size: 12px;
        font-weight: bold;
    }
`;

export const ListContainer = styled.div``;

export const ListHeader = styled.h2`
    font-size: 1.5rem;
    color: #333;
    margin-bottom: 15px;
`;

export const List = styled.ul`
    list-style-type: none;
    padding: 0;
`;

export const ListItem = styled.li`
    display: flex;
    background-color: rgba(240, 240, 240, 0.8);
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 5px;
    backdrop-filter: blur(5px);
    gap: 10px;
`;
