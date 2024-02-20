import { Container } from "../../../../components/CommonStyledElements";
import { UserCardContainerProps } from "./FarmCard.static";
import { UserCardsContainerWrapper } from "./FarmCard.styles";
import UserCard from "./UserCard";

const UserCardsContainer = ({ users, deleteUser }:UserCardContainerProps) => {
    return (
      <Container>
          <UserCardsContainerWrapper>
          {users && users.length > 0 ? (
          users.map((user) => <UserCard key={user.id} user={user} deleteUser={deleteUser} />)
        ) : (
          <p>No users available!</p>
        )}
      </UserCardsContainerWrapper>
        </Container>
    );
  };
  
  export default UserCardsContainer;