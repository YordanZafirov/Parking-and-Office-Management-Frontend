import styled from "styled-components";

export const HomeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  height: 100vh;

  h1 {
    text-align: center;
    color: #fff;
    margin: 50px 0 20px;
    z-index: 1;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    z-index: 1;
  }

  li {
    position: relative;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 5px;
    overflow: hidden;
    transition: transform 0.3s ease;
    cursor: pointer;
    margin: 10px;
    width: 200px;
    &:hover {
      transform: translateY(-5px);
    }
  }

  span {
    display: block;
    padding: 10px;
    text-align: center;
    font-weight: bold;
  }

  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 10px;
    text-align: center;
  }
`;

export const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: rgba(0, 0, 0, 0.5);
  filter: blur(5px) brightness(0.4);
`;

export const LocationImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`;
