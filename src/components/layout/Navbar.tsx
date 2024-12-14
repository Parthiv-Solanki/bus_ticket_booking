import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <a href='/reservation' className="text-white md:text-sm flex gap-2 justify-enter items-center">
                    <div className='w-8 h-8'>
                        <img src='./bus.png' alt='bus-logo' className='w-full h-full' />
                    </div>
                    <span className='text-nowrap hover:text-[#ffa500]'>Bus Trip Planner</span>
                </a>
                <div className="text-white">
                    <NavLink to="/reservation" className="mx-2 hover:text-[#ffa500]">Reservation</NavLink>
                    <NavLink to="/dashboard" className="mx-2 hover:text-[#ffa500]">Dashboard</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
