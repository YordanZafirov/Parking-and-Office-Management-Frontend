import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5rem;
  align-items: center;
  background-color: #f5f5f5;
  height: calc(100vh - 5rem);

  h1 {
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  li {
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    margin: 10px;
    width: 400px;
    &:hover {
      transform: translateY(-5px);
    }
  }

  a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
  }
`;
