import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white text-xl">Bus Ticket Booking</div>
                <div className="text-white">
                    <Link to="/reservation" className="mx-2">Reservation</Link>
                    <Link to="/dashboard" className="mx-2">Dashboard</Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
