export interface Passenger {
    firstName: string;
    lastName: string;
    email: string;
    seatNumber: number;
    dateOfBooking: string;
}

export interface PassengerListProps {
    passengers: Passenger[];
    reservedSeats: boolean[];
    onEdit: (originalSeatNumber: number, newSeatNumber: number, firstName: string, lastName: string, email: string) => void;
    onDelete: (seatNumber: number) => void;
}

export interface PassengerCardProps {
    passenger: Passenger;
    reservedSeats: boolean[];
    onEdit: (originalSeatNumber: number, newSeatNumber: number, firstName: string, lastName: string, email: string) => void;
    onDelete: (seatNumber: number) => void;
}

export interface SeatMapProps {
    seats: boolean[];
    onSeatClick: (index: number) => void;
}

export interface ReservationFormProps {
    onSubmit: (firstName: string, lastName: string, email: string) => void;
}
export interface SeatProps {
    seatNumber: number;
    isReserved: boolean;
    onClick: () => void;
}

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}