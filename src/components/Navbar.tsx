import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between">
                <div className="text-white md:text-xl">Bus Ticket Booking</div>
                <div className="text-white">
                    <NavLink to="/reservation" className="mx-2 hover:text-[#ffa500]">Reservation</NavLink>
                    <NavLink to="/dashboard" className="mx-2 hover:text-[#ffa500]">Dashboard</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
