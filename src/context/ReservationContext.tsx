import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { post } from '../services/fetchService';
import { endpoints } from '../static/endpoints';
import { ReservationInterface } from '../static/types';
import { toast } from 'react-toastify';

interface ReservationContextInterface {
    addReservation: (reservationsToAdd: ReservationInterface) => void;
    reservations: ReservationInterface[];
    sendReservationsToBackend: (reservations: ReservationInterface[]) => void;
    removeReservation: (id: string, start: Date, end: Date) => void;
}

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

    const addReservation = (reservationToAdd: ReservationInterface) => {
        setReservation((prevReservations) => [...prevReservations, reservationToAdd]);
    };

    const sendReservationsToBackend = async (reservations: ReservationInterface[]) => {
        const dataToSend = { reservations };
        try {
            const response = await post(`${endpoints.createMultipleReservations}`, dataToSend);
            toast.success('Reservations sent successfully');
            setReservation([]);
            sessionStorage.removeItem('reservation');
        } catch (error) {
            console.error('Error occurred while sending reservations:', error);
            toast.error('Something went wrong');
            throw error;
        }
    };

    const removeReservation = (id: string, start: Date, end: Date) => {
        setReservation((prevReservations) => {
            const updatedReservations = prevReservations.filter(
                (reservation) => reservation.spotId !== id || reservation.start !== start || reservation.end !== end,
            );
            sessionStorage.setItem('reservation', JSON.stringify(updatedReservations));
            toast.success('Reservation removed');
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

export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
};
