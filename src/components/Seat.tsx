import React from 'react';

const Seat: React.FC<SeatProps> = (props) => {
    const { seatNumber, isReserved = false, onClick } = props;

    return (
        <button
            onClick={onClick}
            className={`text-end w-20 h-10 m-1 border-2 border-black cursor-pointer rounded ${isReserved ? 'bg-red-300 hover:bg-red-600' : 'bg-gray-300 hover:bg-gray-500 '}`}
            disabled={isReserved}
        >
            <span>{seatNumber}</span>
            <span className='h-2 w-5 border-2 border-black mx-2 px-1'></span>
        </button>
    );
}

export default Seat;
