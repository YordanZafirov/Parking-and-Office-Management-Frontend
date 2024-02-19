import styled from "styled-components";

export const PageTitle = styled.h1`
margin-top: 3rem;
color: var(--dark-blue);
text-align: center;
`;

export const Container = styled.div`
  max-width: 1500px;
  margin: auto;
  padding: 0 2rem;
  overflow: hidden;
`;

export const BaseButton = styled.button`
margin: 10px;
  padding: 10px 15px;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;