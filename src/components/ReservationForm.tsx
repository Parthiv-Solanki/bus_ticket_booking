import React, { useState } from 'react';
import { ReservationFormProps } from '../utils';

const ReservationForm: React.FC<ReservationFormProps> = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(firstName, lastName, email);
        setFirstName('');
        setLastName('');
        setEmail('');
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col border-2 border-white p-5">
            <p className='text-lg text-center font-bold'>Book Your Seat</p>
            <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="mb-2 p-2 border"
            />
            <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="mb-2 p-2 border"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="mb-2 p-2 border"
            />
            <button type="submit" className="bg-gray-800 text-white p-2">Reserve</button>
        </form>
    );
}

export default ReservationForm;
