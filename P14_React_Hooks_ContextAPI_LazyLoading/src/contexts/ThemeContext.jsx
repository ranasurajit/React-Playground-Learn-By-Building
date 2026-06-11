import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const ThemeContext = createContext(null);

// custom hook
export const useTheme = () => {
    return useContext(ThemeContext);
};

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    console.log('Theme Context Provider rendered');

    useEffect(() => {
        // it is called when dependency 'theme' is changed
        document.body.className = theme;
    }, [theme]);

    /**
     * Usage of 'usecallback' hook will not recreate
     * the method when ThemeContext.jsx is re-rendered
     * It has empty [] dependency array as it is not 
     * dependent on theme but on setTheme where we
     * have prev value of theme and just uses functional
     * update so it is safe to use empty [] dependency 
     */
    const toggleTheme = useCallback(() => {
        setTheme((prev) => {
            return prev === 'light' ? 'dark' : 'light';
        });
    }, []);

    const value = useMemo(() => {
        return {
            theme,
            toggleTheme
        };
    }, [theme, toggleTheme]);

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
