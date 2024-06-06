import React, { useEffect, useState } from 'react';
import PassengerList from '../components/PassengerList';

interface Passenger {
  firstName: string;
  lastName: string;
  email: string;
  seatNumber: number;
  dateOfBooking: string;
}

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
    <div className="mx-auto p-4">
      <PassengerList passengers={passengers} reservedSeats={reservedSeats} onDelete={handleDelete} />
    </div>
  );
};

export default Dashboard;
