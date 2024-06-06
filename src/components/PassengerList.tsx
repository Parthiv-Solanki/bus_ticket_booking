import React from 'react';
import PassengerCard from './PassengerCard';
import { PassengerListProps } from '../utils';

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
