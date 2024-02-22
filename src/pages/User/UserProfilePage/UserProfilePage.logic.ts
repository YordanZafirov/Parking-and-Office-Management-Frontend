import { useLocation, useNavigate, useParams } from "react-router";
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
  const { data: user, refetch: userRefetch } = useQuery(["user", userId], () =>
    getUser(userId)
  );
  return { user, userRefetch };
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
  const { user, userRefetch } = UseUser(userId);
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
  const location = useLocation();


  return {
    user,
    pastReservations,
    currentReservations,
    futureReservations,
    activeTab,
    handleTabClick,
    userRefetch,
    logout,
    handleUpdateUserProfilePicture: (id: string) =>
    navigate(`${route.user}/${id}/change-picture`, { state: { background: location } }),
    handleUpdateUserPassword: (id: string) =>
    navigate(`${route.user}/${id}/change-password`, { state: { background: location } }),
  };
};
