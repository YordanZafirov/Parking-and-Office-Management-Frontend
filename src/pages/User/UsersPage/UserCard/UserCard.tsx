import { useNavigate } from "react-router";
import { UserCardProps } from "./FarmCard.static";
import { route } from "../../../../static/routes";
import { StyledUserCard, UserImage } from "./FarmCard.styles";
import UserCardDetails from "./UserCardDetails";
import userImg from "../../../../assets/default-profile.jpg";

export default function UserCard({ user }: UserCardProps) {

    const navigate = useNavigate();
  
    const handleUserClick = () => {
      navigate(`${route.user}/${user.id}`);
    };
  
    return (
      <StyledUserCard onClick={handleUserClick}>
        <UserImage src={userImg} alt="User"/>
        <UserCardDetails user={user} />
      </StyledUserCard>
    );
  }