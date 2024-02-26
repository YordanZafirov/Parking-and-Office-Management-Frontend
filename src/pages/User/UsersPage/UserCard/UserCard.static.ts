import { User } from "../UsersPage.static";


export interface UserCardProps {
  user: User;
  deleteUser: (userId: string) => Promise<void>
}

export interface UserCardContainerProps {
  users: User[];
  deleteUser: (userId: string) => Promise<void>
}

export interface UserDetailsProps {
  user: User;
  deleteUser: (userId: string) => Promise<void>
}
