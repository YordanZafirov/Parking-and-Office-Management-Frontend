import styled from "styled-components";

export const StyledProfilePictureForm = styled.form`
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
  }
  input {
    margin-top: 5px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  button {
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    color: #cce5ff;
    background-color: #007bff;
    cursor: pointer;
  }
  div {
    color: red;
  }
`;