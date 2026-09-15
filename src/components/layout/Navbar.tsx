import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        {/* DEV BRANCH MODIFICATION */}
        <nav className="bg-slate-900 border-b border-slate-800 p-6 sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center">
                <a href='/reservation' className="text-white md:text-sm flex gap-2 justify-center items-center">
                    <div className='w-8 h-8'>
                        <img src='./bus.png' alt='bus-logo' className='w-full h-full' />
                    </div>
                    <span className='text-nowrap hover:text-amber-400'>Bus Trip Planner</span>
                </a>
                {/* DEV BRANCH LINKS MODIFICATION */}
                <div className="flex items-center space-x-6 text-slate-200 font-medium">
                    <NavLink to="/reservation" className="hover:text-amber-400 transition-colors">Bookings</NavLink>
                    <NavLink to="/dashboard" className="hover:text-amber-400 transition-colors">Dashboard</NavLink>
                    <NavLink to="/profile" className="hover:text-amber-400 transition-colors">Profile</NavLink>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;