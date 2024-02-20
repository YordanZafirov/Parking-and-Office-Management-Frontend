import styled from "styled-components";

export const SpotTypeContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 20px;
padding: 20px;
width: 60%;
margin: 3rem auto;
background-color: var(--light-pink);
border: 1px solid #ccc;
text-align: center;
`;

export const SpotTypeCard = styled.div`
background-color: var(--light-purple);
padding: 20px;


a{
  color: var(--light-pink);
  text-decoration: none;
}
`;
