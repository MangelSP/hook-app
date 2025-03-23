import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter";


const heavyStuff = (inreationNumber = 1000000000) => {
    for (let i = 0; i < inreationNumber; i++) {
        console.log('Ahi vamos...');
    }
    return `${inreationNumber} iteraciones realizadas`;
}

const MemorizeHook = () => {

    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(4000);

    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

    return (
        <div>
            <h1>Counter: <small>{counter}</small></h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button className="btn btn-primary" onClick={() => handleIncrement()}>+1</button>
            <button className="btn btn-secondary" onClick={() => handleDecrement()}>-1</button>
            <button className="btn btn-tertiary" onClick={() => handleReset()}>Reset</button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}

export default MemorizeHook;
