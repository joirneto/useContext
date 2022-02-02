import { useState, useEffect, createContext , useContext} from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
    const [counter, setCounter] = useState(0);
    const [doubleCounter, setDoubleCounter] = useState(0);

    const increment = () => setCounter(counter+1)

    useEffect(() => {
        setDoubleCounter(counter * 2)
    }, [counter])

    return (
        <CounterContext.Provider value={{ counter, increment, doubleCounter }}>
            {children}
        </CounterContext.Provider>
    )
}

export function useCounter() {
    const context = useContext(CounterContext);
    return context;
}