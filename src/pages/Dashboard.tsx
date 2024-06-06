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

  return (
    <div className="mx-auto p-4">
      <PassengerList passengers={passengers} reservedSeats={reservedSeats} />
    </div>
  );
};

export default Dashboard;
