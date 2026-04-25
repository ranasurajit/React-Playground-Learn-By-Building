import { createContext, useContext, useMemo, useState } from 'react';

const CounterContext = createContext(null);

// Custom Hook - useCounter
export const useCounter = () => {
    return useContext(CounterContext);
};

export const CounterContextProvider = (props) => {
    const [counter, setCounter] = useState(0);

    const value = useMemo(() => ({
        counter,
        setCounter
    }), [counter]);

    return (
        <CounterContext.Provider value={value}>
            {props.children}
        </CounterContext.Provider>
    );
};
