import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Navbar = ({ brand }) => {
    const cartItems = useSelector(state => state.cart);

    const totalItems = cartItems.reduce((total, item) => {
        total = total + item.quantity;
        return total;
    }, 0);

    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-900 text-white shadow-md px-6 py-4'>
            {/* Left: Logo + Brand */}
            <div className='flex items-center shrink-0 mr-6 cursor-pointer'>
                <svg
                    className='fill-current h-8 w-8 mr-2'
                    width='54'
                    height='54'
                    viewBox='0 0 54 54'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z' />
                </svg>
                <NavLink to={'/'}>
                    <span className='font-semibold text-xl tracking-tight'>
                        {brand}
                    </span>
                </NavLink>
            </div>
            {/* Right: Navigation Buttons */}
            <div className='hidden lg:flex items-center gap-4'>
                <NavLink to={'/'} className='px-4 py-2 rounded-lg hover:bg-slate-700 transition'>
                    🏠 Home
                </NavLink>
                <NavLink to={'/cart'} className='relative px-4 py-2 rounded-lg hover:bg-slate-700 transition'>
                    🛒 Cart
                    {
                        cartItems.length > 0 ?
                            (<span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full'>
                                {totalItems}
                            </span>) :
                            <span></span>
                    }
                </NavLink>
            </div>
            {/* Mobile Menu */}
            <div className='block lg:hidden'>
                <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
                    <svg className='fill-current h-3 w-3' viewBox='0 0 20 20'>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
