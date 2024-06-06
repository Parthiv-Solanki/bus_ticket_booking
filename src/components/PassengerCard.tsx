import React, { useState, useEffect } from 'react';
import { PassengerCardProps } from '../utils';

const PassengerCard: React.FC<PassengerCardProps> = ({ passenger, reservedSeats, onEdit, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [firstName, setFirstName] = useState(passenger.firstName);
    const [lastName, setLastName] = useState(passenger.lastName);
    const [email, setEmail] = useState(passenger.email);
    const [newSeatNumber, setNewSeatNumber] = useState(passenger.seatNumber);

    const handleEdit = () => {
        onEdit(passenger.seatNumber, newSeatNumber, firstName, lastName, email);
        setIsEditing(false);
    };

    return (
        <div className="border p-4 mb-2">
            {isEditing ? (
                <div className='flex flex-col'>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="mb-2 p-2 border"
                    />
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="mb-2 p-2 border"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-2 p-2 border"
                    />
                    <select
                        value={newSeatNumber}
                        onChange={(e) => setNewSeatNumber(Number(e.target.value))}
                        className="mb-2 p-2 border"
                    >
                        {[...Array(40)].map((_, index) => (
                            <option key={index} value={index + 1} disabled={reservedSeats[index] && index + 1 !== passenger.seatNumber}>
                                Seat {index + 1}
                            </option>
                        ))}
                    </select>
                    <button onClick={handleEdit} className="bg-blue-500 text-white p-2">Save</button>
                </div>
            ) : (
                <>
                    <div>{passenger.firstName} {passenger.lastName}</div>
                    <div>{passenger.email}</div>
                    <div>Seat Number: {passenger.seatNumber}</div>
                    <div>Date of Booking: {passenger.dateOfBooking}</div>
                    <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2">Edit</button>
                    <button onClick={() => onDelete(passenger.seatNumber)} className="bg-red-500 text-white p-2">Delete</button>
                </>
            )}
        </div>
    );
}

export default PassengerCard;
