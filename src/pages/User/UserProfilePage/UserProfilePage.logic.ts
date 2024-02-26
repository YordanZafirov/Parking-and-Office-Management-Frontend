import { useLocation, useNavigate, useParams } from 'react-router';
import { useQuery } from 'react-query';
import {
    getCurrentReservationsByUser,
    getFutureReservationsByUser,
    getPastReservationsByUser,
    getUser,
} from '../../../services/userService';
import { route } from '../../../static/routes';
import { SetStateAction, useState } from 'react';
import { useAuth } from '../../../context/AuthContext';


// Custom hook to fetch user data
export const useUser = (userId: string | undefined) => {
    const { data: user, refetch: userRefetch } = useQuery(['user', userId], () => getUser(userId));
    return { user, userRefetch };
};

// Custom hook to fetch past reservations by user
export const usePastReservationsByUser = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['pastReservationsByUserId'], () => getPastReservationsByUser(userId));
    return { pastReservations: reservations, pastReservationsRefetch: refetch, arePastReservationsLoading: isLoading };
};

// Custom hook to fetch current reservations by user
export const useCurrentReservationsByUser = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['currentReservationsByUserId'], () => getCurrentReservationsByUser(userId));
    return {
        currentReservations: reservations,
        currentReservationsRefetch: refetch,
        areCurrentReservationsLoading: isLoading,
    };
};

// Custom hook to fetch future reservations by user
export const useFutureReservationsByUser = (userId: string | undefined) => {
    const {
        data: reservations,
        refetch,
        isLoading,
    } = useQuery(['futureReservationsByUserId'], () => getFutureReservationsByUser(userId));
    return {
        futureReservations: reservations,
        futureReservationsRefetch: refetch,
        areFutureReservationsLoading: isLoading,
    };
};

// Logic for the UserProfilePage component
export const UserProfilePageLogic = () => {
    const { id: userId } = useParams();
    const { user, userRefetch } = useUser(userId);
    const { pastReservations, arePastReservationsLoading, pastReservationsRefetch } = usePastReservationsByUser(userId);
    const { currentReservations, areCurrentReservationsLoading, currentReservationsRefetch } =
        useCurrentReservationsByUser(userId);
    const { futureReservations, areFutureReservationsLoading, futureReservationsRefetch } =
        useFutureReservationsByUser(userId);
    console.log([futureReservations]);
    const [activeTab, setActiveTab] = useState('future'); // State to track active tab
    const { logout } = useAuth();
    const handleTabClick = (tab: SetStateAction<string>) => {
        setActiveTab(tab);
    };

    const navigate = useNavigate();
    const location = useLocation();
    const reservationTypes = {past: 'Past', current: 'Current', future: 'Future'};

    return {
        user,
        pastReservations,
        arePastReservationsLoading,
        pastReservationsRefetch,
        currentReservations,
        areCurrentReservationsLoading,
        currentReservationsRefetch,
        futureReservations,
        areFutureReservationsLoading,
        futureReservationsRefetch,
        activeTab,
        handleTabClick,
        userRefetch,
        logout,
        reservationTypes,
        handleUpdateUserProfilePicture: (id: string) =>
            navigate(`${route.user}/${id}/change-picture`, { state: { background: location } }),
        handleUpdateUserPassword: (id: string) =>
            navigate(`${route.user}/${id}/change-password`, { state: { background: location } }),
    };
};
