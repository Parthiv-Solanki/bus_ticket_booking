interface Passenger {
    firstName: string;
    lastName: string;
    email: string;
    seatNumber: number;
    dateOfBooking: string;
}

type EditHandler = (originalSeatNumber: number, newSeatNumber: number, firstName: string, lastName: string, email: string) => void;

interface PassengerListProps {
    passengers: Passenger[];
    reservedSeats: boolean[];
    onEdit: EditHandler;
    onDelete: (seatNumber: number) => void;
}

interface PassengerCardProps {
    passenger: Passenger;
    reservedSeats: boolean[];
    onEdit: EditHandler;
    onDelete: (seatNumber: number) => void;
}

interface SeatMapProps {
    seats: boolean[];
    onSeatClick: (index: number) => void;
}

interface ReservationFormProps {
    onSubmit: (firstName: string, lastName: string, email: string) => void;
}
interface SeatProps {
    seatNumber: number;
    isReserved: boolean;
    onClick: () => void;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}