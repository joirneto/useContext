import { useCounter } from "../../context/CounterContext";

const Counter = () => {
    const {counter, increment} = useCounter();
    return (
        <div>
            <h1> Counter: {counter} </h1>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}

export default Counter