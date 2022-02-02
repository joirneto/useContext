import { useCounter } from "../../context/CounterContext";

const DoubleCounter = () => {
    const {doubleCounter} = useCounter();
    return (
        <div>
            <h1> Double: {doubleCounter} </h1>
        </div>
    )
}

export default DoubleCounter