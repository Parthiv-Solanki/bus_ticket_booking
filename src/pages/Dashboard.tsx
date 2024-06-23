import React, { useEffect, useState } from 'react';
import PassengerList from '../components/PassengerList';
import { Passenger } from '../utils';

const Dashboard: React.FC = () => {
  const [passengers, setPassengers] = useState<Passenger[]>([]);
  const [reservedSeats, setReservedSeats] = useState<boolean[]>(Array(40).fill(false));

  useEffect(() => {
    const storedPassengers = JSON.parse(localStorage.getItem('passengers') || '[]');
    setPassengers(storedPassengers);
    const newReservedSeats = Array(40).fill(false);
    storedPassengers.forEach((passenger: Passenger) => {
      newReservedSeats[passenger.seatNumber - 1] = true;
    });
    setReservedSeats(newReservedSeats);
  }, []);

  const updateLocalStorage = (updatedPassengers: Passenger[]) => {
    localStorage.setItem('passengers', JSON.stringify(updatedPassengers));
    window.dispatchEvent(new Event('storage'));
  };

  const handleEdit = (originalSeatNumber: number, newSeatNumber: number, firstName: string, lastName: string, email: string) => {
    const updatedPassengers = passengers.map((passenger) =>
      passenger.seatNumber === originalSeatNumber
        ? { ...passenger, seatNumber: newSeatNumber, firstName, lastName, email }
        : passenger
    );
    setPassengers(updatedPassengers);
    updateLocalStorage(updatedPassengers);

    const newReservedSeats = Array(40).fill(false);
    updatedPassengers.forEach((passenger) => {
      newReservedSeats[passenger.seatNumber - 1] = true;
    });
    setReservedSeats(newReservedSeats);
  };

  const handleDelete = (seatNumber: number) => {
    const updatedPassengers = passengers.filter((passenger) => passenger.seatNumber !== seatNumber);
    setPassengers(updatedPassengers);
    updateLocalStorage(updatedPassengers);

    const newReservedSeats = Array(40).fill(false);
    updatedPassengers.forEach((passenger) => {
      newReservedSeats[passenger.seatNumber - 1] = true;
    });
    setReservedSeats(newReservedSeats);
  };

  return (
    <div className="container mx-auto p-4">
      <p className='font-bold text-xl my-6'>Passengers List</p>
      <PassengerList passengers={passengers} reservedSeats={reservedSeats} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
