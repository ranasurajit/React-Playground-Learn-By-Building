import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext(null);

// custom hook
export const useTheme = () => {
    return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme((prev) => {
            return prev === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
