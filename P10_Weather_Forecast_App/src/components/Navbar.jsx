import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    };

    return (
        <nav className='w-full bg-linear-to-r from-blue-600 to-indigo-700 shadow-md'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
                {/* Left Section (Logo + Name) */}
                <div className='flex items-center gap-3 cursor-pointer' onClick={navigateToHome}>
                    {/* 🔽 ICON PLACEHOLDER (Replace src with your file) */}
                    <img
                        src='/src/assets/app-icon.svg'
                        alt='Forecastify Logo'
                        className='w-10 h-10 object-contain'
                    />
                    <h1 className='text-white text-xl font-semibold tracking-wide'>
                        Forecastify
                    </h1>
                </div>
                {/* Right Section (Nav Links) */}
                <div className='hidden md:flex items-center gap-8 text-white font-medium'>
                    <NavLink to={'/'} className='hover:text-blue-200 transition'>
                        Home
                    </NavLink>
                    <NavLink to={'/forecast'} className='hover:text-blue-200 transition'>
                        Forecast
                    </NavLink>
                    <NavLink to={'/maps'} className='hover:text-blue-200 transition'>
                        Maps
                    </NavLink>
                    <NavLink to={'/about'} className='hover:text-blue-200 transition'>
                        About
                    </NavLink>
                </div>
                {/* Mobile Menu Button (optional for future) */}
                <div className='md:hidden text-white text-2xl cursor-pointer'>
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
