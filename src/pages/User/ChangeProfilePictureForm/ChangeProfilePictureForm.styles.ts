import styled from 'styled-components';

const StyledProfilePictureForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px 0 #000000;
    .form-title {
        text-align: center;
    }
    label {
        margin-top: 10px;
        color: #000000;
    }
    input {
        margin-top: 5px;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
    }
    div {
        color: red;
    }
`;

export { StyledProfilePictureForm };
