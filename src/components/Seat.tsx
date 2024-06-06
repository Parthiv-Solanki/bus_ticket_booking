import React from 'react';
import { SeatProps } from '../utils';

const Seat: React.FC<SeatProps> = ({ seatNumber, isReserved, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`text-end w-20 h-10 m-1 border-2 border-black ${isReserved ? 'bg-red-500' : 'bg-gray-300'}`}
            disabled={isReserved}
        >
            <span>{seatNumber}</span>
            <span className='h-2 w-5 border-2 border-black mx-2 px-1'></span>
        </button>
    );
}

export default Seat;
