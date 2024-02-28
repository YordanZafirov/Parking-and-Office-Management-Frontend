import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { post } from '../services/fetchService';
import { endpoints } from '../static/endpoints';
import { ReservationInterface } from '../static/types';

// Define the context interface
interface ReservationContextInterface {
    addReservation: (reservationsToAdd: ReservationInterface) => void;
    reservations: ReservationInterface[];
    sendReservationsToBackend: (reservations: ReservationInterface[]) => void;
    removeReservation: (id: string, start: Date, end: Date) => void;
}

// Specify the type of children prop
interface ReservationProviderProps {
    children: ReactNode;
}

const ReservationContext = createContext<ReservationContextInterface | undefined>(undefined);

export const ReservationProvider = ({ children }: ReservationProviderProps) => {
    const [reservations, setReservation] = useState<ReservationInterface[]>([]);

    useEffect(() => {
        const storedReservation = sessionStorage.getItem('reservation');
        if (storedReservation) {
            setReservation(JSON.parse(storedReservation));
        }
    }, []);

    useEffect(() => {
        if (reservations.length > 0) {
            sessionStorage.setItem('reservation', JSON.stringify(reservations));
        }
    }, [reservations]);

    const addReservation = (reservationsToAdd: ReservationInterface) => {
        setReservation([...reservations, reservationsToAdd]);
    };

    const sendReservationsToBackend = async (reservations: ReservationInterface[]) => {
        const dataToSend = { reservations };
        try {
            const response = await post(`${endpoints.createMultipleReservations}`, dataToSend);
            console.log('Full Response:', response);
            if (response.status >= 200 && response.status < 300) {
                setReservation([]);
                sessionStorage.removeItem('reservation');
            } else {
                console.error('Error:', response.statusText);
                return null;
            }
        } catch (error) {
            console.error('Exception:', error.message);
            throw error;
        }
    };

    const removeReservation = (id: string, start: Date, end: Date) => {
        setReservation((prevReservations) => {
            const updatedReservations = prevReservations.filter(
                (reservation) => reservation.spotId !== id || reservation.start !== start || reservation.end !== end,
            );
            sessionStorage.setItem('reservation', JSON.stringify(updatedReservations));
            return updatedReservations;
        });
    };

    return (
        <ReservationContext.Provider
            value={{ addReservation, reservations, sendReservationsToBackend, removeReservation }}
        >
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
