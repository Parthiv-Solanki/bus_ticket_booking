import React from 'react';
import PassengerCard from './PassengerCard';

interface Passenger {
    firstName: string;
    lastName: string;
    email: string;
    seatNumber: number;
    dateOfBooking: string;
}

interface PassengerListProps {
    passengers: Passenger[];
    reservedSeats: boolean[];
    onEdit: (originalSeatNumber: number, newSeatNumber: number, firstName: string, lastName: string, email: string) => void;
    onDelete: (seatNumber: number) => void;
}

const PassengerList: React.FC<PassengerListProps> = ({ passengers, reservedSeats, onEdit, onDelete }) => {
    return (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {passengers.map((passenger) => (
                <PassengerCard
                    key={passenger.seatNumber}
                    passenger={passenger}
                    reservedSeats={reservedSeats}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </div>
    );
};

export default PassengerList;
