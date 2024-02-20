import { deleteUser, getUsers } from "./../../../services/userService";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { route } from "../../../static/routes";
import { useMutation, useQuery } from "react-query";
import { User } from "./UsersPage.static";

export const UseUsers = () => {
  const {
    data: users,
    isLoading,
    error,
    refetch,
  } = useQuery({ queryKey: ["users"], queryFn: getUsers });
  return { users, isLoading, error, refetch };
};

export const UseDeleteUser = () => {
  const { refetch } = UseUsers();
  const deleteUserMutation = useMutation(deleteUser);
  return { deleteUser: deleteUserMutation.mutate, refetch };
};

export const UseUsersPageLogic = () => {
  const { users, isLoading } = UseUsers();
  const [filteredUsers, setFilteredUsers] = useState<User[] | undefined>([]);
  const title = "All Users";
  const searchPlaceholder = "Search user..";
  const navigate = useNavigate();
  const handleCreateUser = () => {
    navigate(route.register);
  };
  const handleDeleteUser = async (userId: string) => {
    const { deleteUser, refetch } = UseDeleteUser();
    deleteUser(userId);
    refetch();
  };

  useEffect(() => {
    if (users) {
      setFilteredUsers(users);
    }
  }, [users]);
  const handleSearch = (query: string) => {
    const filtered = users?.filter((user: User) =>
      user.email.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };
  return {
    users: filteredUsers,
    isLoading,
    handleSearch,
    handleCreateUser,
    handleDeleteUser,
    title,
    searchPlaceholder,
  };
};
