import { createContext, useContext, useEffect, useState } from 'react';
import { ReservationInterface } from '../pages/Reservation/Reservation.static';

interface ReservationContextInterface {
    addReservation: (
        spotId: string,
        userId: string,
        start: Date,
        end: Date,
        comment: string,
        modifiedBy: string,
    ) => void;
    reservation: ReservationInterface[];
}

const ReservationContext = createContext<ReservationContextInterface | undefined>(undefined);

export const ReservationProvider = ({ children }: any) => {
    const [reservation, setReservation] = useState<ReservationInterface[]>([]);

    useEffect(() => {
        // Load cart items from localStorage on component mount
        const storedReservation = sessionStorage.getItem('reservation');
        if (storedReservation) {
            setReservation(JSON.parse(storedReservation));
        }
    }, []);

    useEffect(() => {
        // Save cart items to localStorage whenever items change
        if (reservation.length > 0) {
            sessionStorage.setItem('reservation', JSON.stringify(reservation));
        }
    }, [reservation]);

    const addReservation = (
        spotId: string,
        userId: string,
        start: Date,
        end: Date,
        comment: string,
        modifiedBy: string,
    ) => {
        // Create a new reservation object
        const newReservation: ReservationInterface = {
            spotId: spotId,
            userId: userId,
            modifiedBy: modifiedBy,
            comment: comment,
            start: start,
            end: end,
        };

        // Add the reservation to the state
        setReservation([...reservation, newReservation]);
    };

    return (
        <ReservationContext.Provider value={{ addReservation, reservation }}>{children}</ReservationContext.Provider>
    );
};

export const useReservationContext = () => {
    const context = useContext(ReservationContext);
    if (!context) {
        throw new Error('useReservation must be used within a ReservationProvider');
    }
    return context;
};
