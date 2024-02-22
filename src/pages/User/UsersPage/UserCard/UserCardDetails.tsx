import { BaseButton } from "../../../../components/CommonStyledElements";
import { UserDetailsProps } from "./FarmCard.static";
import { StyledUserDetails } from "./FarmCard.styles";

export default function UserDetails({ user, deleteUser }: UserDetailsProps) {

    
    return (
      <StyledUserDetails>
        <h3>{user.email}</h3>
        {user.role !== "ADMIN" && (
        <BaseButton onClick={() => deleteUser(user.id)}>Delete User</BaseButton>
      )}
      </StyledUserDetails>
    );
  }