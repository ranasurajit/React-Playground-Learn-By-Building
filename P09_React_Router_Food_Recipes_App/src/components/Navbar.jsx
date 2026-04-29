import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();

    return (
        <nav className='w-full bg-linear-to-r from-orange-500 via-red-500 to-pink-500 shadow-lg'>
            <div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>

                {/* Left Section (Logo + Name) */}
                <div className='flex items-center gap-3 cursor-pointer' onClick={() => {
                    navigate('/')
                }}>
                    <img
                        src='/src/assets/app-icon.svg'
                        alt='RecipeVerse Logo'
                        className='w-10 h-10 object-contain drop-shadow-md'
                    />
                    <h1 className='text-white text-2xl font-bold tracking-wide'>
                        🍳 RecipeVerse
                    </h1>
                </div>

                {/* Right Section (Nav Links) */}
                <div className='hidden md:flex items-center gap-8 text-white font-medium'>
                    <NavLink to={'/'} className='hover:text-yellow-200 transition duration-200'>
                        Home
                    </NavLink>
                    <NavLink to={'/recipes'} className='hover:text-yellow-200 transition duration-200'>
                        Recipes
                    </NavLink>
                    <NavLink to={'/categories'} className='hover:text-yellow-200 transition duration-200'>
                        Categories
                    </NavLink>
                    <NavLink to={'/about'} className='hover:text-yellow-200 transition duration-200'>
                        About
                    </NavLink>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden text-white text-2xl cursor-pointer'>
                    ☰
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
