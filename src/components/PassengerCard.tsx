import React, { useState, useEffect } from 'react';

interface Passenger {
    firstName: string;
    lastName: string;
    email: string;
    seatNumber: number;
    dateOfBooking: string;
}

interface PassengerCardProps {
    passenger: Passenger;
    reservedSeats: boolean[];
}

const PassengerCard: React.FC<PassengerCardProps> = ({ passenger, reservedSeats }) => {
    return (
        <div className="border p-4 mb-2">
            <div>{passenger.firstName} {passenger.lastName}</div>
            <div>{passenger.email}</div>
            <div>Seat Number: {passenger.seatNumber}</div>
            <div>Date of Booking: {passenger.dateOfBooking}</div>
            <div className='mt-4'>
                <button className="bg-green-500 text-white p-2 mr-5 rounded-lg">Edit</button>
                <button className="bg-red-500 text-white p-2 rounded-lg">Delete</button>
            </div>
        </div>
    );
}

export default PassengerCard;
