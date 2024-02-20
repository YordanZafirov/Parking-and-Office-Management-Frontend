import { UserDetailsProps } from "./FarmCard.static";
import { StyledUserDetails } from "./FarmCard.styles";

export default function UserDetails({ user }: UserDetailsProps) {
    return (
      <StyledUserDetails>
        <h3>{user.email}</h3>
      </StyledUserDetails>
    );
  }