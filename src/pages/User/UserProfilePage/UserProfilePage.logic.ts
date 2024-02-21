import { useNavigate, useParams } from "react-router";
import { useQuery } from "react-query";
import {
  getCurrentReservationsByUser,
  getFutureReservationsByUser,
  getPastReservationsByUser,
  getUser,
} from "../../../services/userService";
import { route } from "../../../static/routes";
import { SetStateAction, useState } from "react";
import { useAuth } from "../../../context/AuthContext";

export const UseUser = (userId: string | undefined) => {
  const { data: user, refetch } = useQuery(["user", userId], () =>
    getUser(userId)
  );
  return { user, refetch };
};

export const UsePastReservationsByUser = (userId: string | undefined) => {

  const { data: reservations, refetch } = useQuery(["pastReservationsByUserId"], () =>
    getPastReservationsByUser(userId)
  );
  return { pastReservations: reservations, refetch };
};
export const UseCurrentReservationsByUser = (userId: string | undefined) => {
  const { data: reservations, refetch } = useQuery(["currentReservationsByUserId"], () =>
    getCurrentReservationsByUser(userId)
  );
  return { currentReservations: reservations, refetch };
};
export const UseFutureReservationsByUser = (userId: string | undefined) => {
  const { data: reservations, refetch } = useQuery(["futureReservationsByUserId"], () =>
    getFutureReservationsByUser(userId)
  );
  return { futureReservations: reservations, refetch };
};

export const UserProfilePageLogic = () => {
const {id: userId} = useParams()
  const { user } = UseUser(userId);
  const { pastReservations } = UsePastReservationsByUser(userId);
  const { currentReservations } = UseCurrentReservationsByUser(userId);
  const { futureReservations } = UseFutureReservationsByUser(userId);
  console.log([futureReservations]);
  const [activeTab, setActiveTab] = useState("future"); // State to track active tab
  const {logout} = useAuth();
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };

  const navigate = useNavigate();


  return {
    user,
    pastReservations,
    currentReservations,
    futureReservations,
    activeTab,
    handleTabClick,
    logout,
    // showFields,
    // toggleShowFields,
    handleUpdateUserPassword: (id: string) =>
      navigate(route.updatePassword.replace(":userId", id)),
  };
};
