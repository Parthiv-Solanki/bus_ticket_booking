import React from 'react';
import Seat from './Seat';

const SeatMap: React.FC<SeatMapProps> = (props) => {
    const { seats, onSeatClick } = props;

    return (
        <div className="flex flex-col">
            <div className="mx-auto">
                <div className="bg-red-500 text-center px-5 rounded-md">
                    Click on an available seat to proceed with your transaction.
                </div>
                <span className='font-bold'>Lower Deck</span>
                <div className="flex border-l-8 border-gray-800 bg-white">
                    <div className="flex">
                        <span className="border-2 border-black rounded-full h-8 w-8 ml-4 mt-10"></span>
                        <hr className="border-2 h-56 border-gray-300 m-4" />
                    </div>
                    <div>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mt-6">
                            {seats.slice(0, 6).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index}
                                    seatNumber={index + 1}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index)}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                            {seats.slice(6, 12).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 6}
                                    seatNumber={index + 7}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 6)}
                                />
                            ))}
                        </div>
                        <div className="text-end">
                            {seats.slice(12, 13).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 12}
                                    seatNumber={index + 13}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 12)}
                                />
                            ))}
                        </div>
                        <div className="text-end">
                            {seats.slice(13, 14).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 13}
                                    seatNumber={index + 14}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 13)}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                            {seats.slice(14, 20).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 14}
                                    seatNumber={index + 15}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 14)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto">
                <span className='font-bold'>Upper Deck</span>
                <div className="flex border-l-8 border-gray-800 bg-white">
                    <hr className="h-56 m-4" />
                    <div className="md:ml-12">
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2 mt-6">
                            {seats.slice(20, 26).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 20}
                                    seatNumber={index + 21}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 20)}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                            {seats.slice(26, 32).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 26}
                                    seatNumber={index + 27}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 26)}
                                />
                            ))}
                        </div>
                        <div className="text-end">
                            {seats.slice(32, 33).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 32}
                                    seatNumber={index + 33}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 32)}
                                />
                            ))}
                        </div>
                        <div className="text-end">
                            {seats.slice(33, 34).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 33}
                                    seatNumber={index + 34}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 33)}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-7 gap-2">
                            {seats.slice(34, 40).map((isReserved: boolean, index: number) => (
                                <Seat
                                    key={index + 34}
                                    seatNumber={index + 35}
                                    isReserved={isReserved}
                                    onClick={() => onSeatClick(index + 34)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeatMap;
