import React, { useState, useEffect } from 'react';
import SeatMap from '../components/SeatMap';
import ReservationForm from '../components/ReservationForm';

const Reservation: React.FC = () => {
    const [seats, setSeats] = useState<boolean[]>(Array(40).fill(false));
    const [selectedSeat, setSelectedSeat] = useState<number | null>(null);

    useEffect(() => {
        const updateSeats = () => {
            const passengers = JSON.parse(localStorage.getItem('passengers') || '[]');
            const newSeats = Array(40).fill(false);
            passengers.forEach((passenger: { seatNumber: number }) => {
                newSeats[passenger.seatNumber - 1] = true;
            });
            setSeats(newSeats);
        };

        updateSeats();

        window.addEventListener('storage', updateSeats);

        return () => {
            window.removeEventListener('storage', updateSeats);
        };
    }, []);

    const handleSeatClick = (index: number) => {
        setSelectedSeat(index);
    };

    const handleReservation = (firstName: string, lastName: string, email: string) => {
        if (selectedSeat !== null) {
            const newSeats = [...seats];
            newSeats[selectedSeat] = true;
            setSeats(newSeats);

            const passenger = {
                firstName,
                lastName,
                email,
                seatNumber: selectedSeat + 1,
                dateOfBooking: new Date().toISOString().split('T')[0],
            };

            const passengers = JSON.parse(localStorage.getItem('passengers') || '[]');
            passengers.push(passenger);
            localStorage.setItem('passengers', JSON.stringify(passengers));

            setSelectedSeat(null);
        }
    };

    return (
        <div className="container mx-auto p-4">
            {selectedSeat !== null && (
                <div className='md:mx-56 my-8'>
                    <ReservationForm onSubmit={handleReservation} />
                </div>
            )}
            <SeatMap seats={seats} onSeatClick={handleSeatClick} />
        </div>
    );
};

export default Reservation;
