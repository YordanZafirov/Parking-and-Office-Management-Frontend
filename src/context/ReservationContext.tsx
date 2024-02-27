import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { ReservationInterface } from '../pages/SpotType/Reservation.static';
import { post } from '../services/fetchService';
import { endpoints } from '../static/endpoints';

// Define the context interface
interface ReservationContextInterface {
    addReservation: (reservationsToAdd: ReservationInterface) => void;
    reservations: ReservationInterface[];
    sendReservationsToBackend: (reservations: ReservationInterface[]) => void;
}

// Specify the type of children prop
interface ReservationProviderProps {
    children: ReactNode;
}

const ReservationContext = createContext<ReservationContextInterface | undefined>(undefined);

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
    const [reservations, setReservation] = useState<ReservationInterface[]>([]);

    useEffect(() => {
        // Load cart items from localStorage on component mount
        const storedReservation = sessionStorage.getItem('reservation');
        if (storedReservation) {
            setReservation(JSON.parse(storedReservation));
        }
    }, []);

    useEffect(() => {
        // Save cart items to localStorage whenever items change
        if (reservations.length > 0) {
            sessionStorage.setItem('reservation', JSON.stringify(reservations));
        }
    }, [reservations]);

    const addReservation = (reservationsToAdd: ReservationInterface) => {
        // Add the reservations to the state
        setReservation([...reservations, reservationsToAdd]);

        // Send the reservations to the backend
        // sendReservationsToBackend(reservationsToAdd);
    };

    const sendReservationsToBackend = async (reservations: ReservationInterface[]) => {
        const response = await post(`${endpoints.createMultipleReservations}`, reservations);

        if (response.status === 201) {
            // If the reservations were successfully added to the backend, remove them from the state and sessionStorage
            setReservation([]);
            sessionStorage.removeItem('reservation');
        }

        // If the reservations were not successfully added to the backend, show an error message
        if (response.status !== 201) {
            console.error('Error adding reservations to the backend');
        }

        return response;
    };

    return (
        <ReservationContext.Provider value={{ addReservation, reservations, sendReservationsToBackend }}>
            {children}
        </ReservationContext.Provider>
    );
};

// Custom hook that shorthands the context
export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
};
