import React from 'react';
import PassengerCard from './PassengerCard';
import { PassengerListProps } from '../utils';
import { Link } from 'react-router-dom';

const PassengerList: React.FC<PassengerListProps> = ({ passengers, reservedSeats, onEdit, onDelete }) => {
    return (
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4'>
            {passengers && passengers.length > 0 ? passengers?.map((passenger) => (
                <PassengerCard
                    key={passenger.seatNumber}
                    passenger={passenger}
                    reservedSeats={reservedSeats}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))
                :
                <Link to="/reservation" className='text-[#ffa500] hover:border p-2 bg-gray-800 rounded hover:border-[#ffa500] w-fit'>
                    Click Here to Book Your First Ticket
                </Link>
            }
        </div>
    );
};

export default PassengerList;
