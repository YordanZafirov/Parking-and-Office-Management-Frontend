import { useNavigate } from "react-router";
import { UserCardProps } from "./FarmCard.static";
import { route } from "../../../../static/routes";
import { StyledUserCard, UserImage } from "./FarmCard.styles";
import UserCardDetails from "./UserCardDetails";
import userImg from "../../../../assets/default-profile.jpg";

export default function UserCard({ user, deleteUser }: UserCardProps) {


    return (
      <StyledUserCard>
        <UserImage src={userImg} alt="User"/>
        <UserCardDetails user={user} deleteUser={deleteUser} />
      </StyledUserCard>
    );
  }