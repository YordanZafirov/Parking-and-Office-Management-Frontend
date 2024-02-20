import { useNavigate } from "react-router";
import { UseDeleteUser } from "../UsersPage/UsersPage.logic/UseDeleteUser";
import { useQuery } from "react-query";
import {
  getCurrentReservationsByUser,
  getFutureReservationsByUser,
  getPastReservationsByUser,
  getUser,
} from "../../../services/userService";
import { route } from "../../../static/routes";

export const UseUser = (userId: string | undefined) => {
  const { data: user, refetch } = useQuery(["user", userId], () =>
    getUser(userId)
  );
  return { user, refetch };
};

export const UsePastReservationsByUser = (userId: string | undefined) => {
  const { data: reservations, refetch } = useQuery(["user", userId], () =>
    getPastReservationsByUser(userId)
  );
  return { pastReservations: reservations, refetch };
};
export const UseCurrentReservationsByUser = (userId: string | undefined) => {
  const { data: reservations, refetch } = useQuery(["user", userId], () =>
    getCurrentReservationsByUser(userId)
  );
  return { currentReservations: reservations, refetch };
};
export const UseFutureReservationsByUser = (userId: string | undefined) => {
  const { data: reservations, refetch } = useQuery(["user", userId], () =>
    getFutureReservationsByUser(userId)
  );
  return { futureReservations: reservations, refetch };
};

export const UserDetailsPageLogic = (userId: string | undefined) => {
  const { user } = UseUser(userId);
  const { pastReservations } = UsePastReservationsByUser(userId);
  const { currentReservations } = UseCurrentReservationsByUser(userId);
  const { futureReservations } = UseFutureReservationsByUser(userId);

  const { deleteUser } = UseDeleteUser();
  const navigate = useNavigate();
  //   useEffect(() => {
  //     const loadFarmDetails = async () => {
  //       try {
  //         const farmData = await fetchFarmDetails(farmId);
  //         setFarm(farmData);
  //       } catch (error) {
  //         console.error("Error loading farm details:", error);
  //       }
  //     };

  //     const loadFields = async () => {
  //       try {
  //         const fieldsData = await fetchFieldsByFarmId(farmId);
  //         setFields(fieldsData);
  //       } catch (error) {
  //         console.error("Error loading fields:", error);
  //       }
  //     };

  //     const loadMachines = async () => {
  //       try {
  //         const machinesData = await fetchMachinesByFarmId(farmId);
  //         setMachines(machinesData);
  //       } catch (error) {
  //         console.error("Error loading machines:", error);
  //       }
  //     };

  //     loadFarmDetails();
  //     loadFields();
  //     loadMachines();
  //   }, [farmId]);

  return {
    user,
    pastReservations,
    currentReservations,
    futureReservations,
    // showFields,
    // toggleShowFields,
    handleUpdateUserPassword: (id: string) =>
      navigate(route.updateUser.replace(":userId", id)),
    handleDeleteUser: async (id: string) => {
      deleteUser(id);
      navigate(route.user);
    },
  };
};
