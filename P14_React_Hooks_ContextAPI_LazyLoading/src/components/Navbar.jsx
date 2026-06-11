import { Link } from 'react-router-dom';
import { FaHome, FaTasks, FaCog, FaMoon, FaSun } from 'react-icons/fa';

import './Navbar.css';
import { useTheme } from '../contexts/ThemeContext';

const Navbar = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <nav className='navbar'>
            <h2 className='logo'>Productivity Dashboard</h2>
            <div className='nav-links'>
                <Link to='/'>
                    <FaHome style={{ marginRight: '6px' }} />
                    Home
                </Link>
                <Link to='/tasks'>
                    <FaTasks style={{ marginRight: '6px' }} />
                    Tasks
                </Link>
                <Link to='/settings'>
                    <FaCog style={{ marginRight: '6px' }} />
                    Settings
                </Link>
            </div>
            <button className='theme-btn' onClick={toggleTheme}>
                {theme === 'light' ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export default Navbar;
