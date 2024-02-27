import styled from "styled-components";
import { BaseButton } from "../../../../components/CommonStyledElements";

export const StyledUserCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  margin: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background-color: #fff;

  &:hover {
    background-color: #8dd76d;
    transform: scale(1.05);
  }
`;

export const UserImage = styled.img`
  width: 100%;
  max-height: 250px;
  object-fit: cover;
`;

export const UserCardsContainerWrapper = styled.div`
  /* h2 {
    margin-bottom: 10px;
  } */

  background-color: var(--blue-green-light);
  margin: 10px auto;
  padding: 10px 20px;
  border-radius: 8px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  justify-content: center;
  align-items: center;

  @media (max-width: 420px) {
        background-color: transparent;
    }
`;

export const StyledUserDetails = styled.div`
  padding: 16px;
  text-align: center;
  background-color: var(--pink-light);
`;

export const BaseButtonDeleteUser = styled(BaseButton)`
    font-size: 16px;
    padding: 15px;
`;