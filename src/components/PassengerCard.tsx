import React, { useState } from 'react';
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
        <div className="rounded-lg p-4 mb-2 bg-white shadow-xl">
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
                    <div><span className='font-bold'>FullName: </span> {passenger.firstName} {passenger.lastName}</div>
                    <div><span className='font-bold'>Email: </span>{passenger.email}</div>
                    <div><span className='font-bold'>Seat Number: </span>{passenger.seatNumber}</div>
                    <div><span className='font-bold'>Date of Booking: </span>{passenger.dateOfBooking}</div>
                    <div className='mt-2'>
                        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white p-2 px-4 mr-4 rounded-lg">Edit</button>
                        <button onClick={() => onDelete(passenger.seatNumber)} className="bg-red-500 text-white p-2 px-4 rounded-lg">Delete</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default PassengerCard;
