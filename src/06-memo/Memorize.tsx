import { useState } from "react";
import { useCounter } from "../hooks/useCounter";
import Small from "./Small";

const Memorize = () => {

    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(1);

    const [show, setShow] = useState(true);
    return (
        <div>
            <h1>Counter: <Small value={counter} /></h1>
            <hr />
            <button className="btn btn-primary" onClick={() => handleIncrement()}>+1</button>
            <button className="btn btn-secondary" onClick={() => handleDecrement()}>-1</button>
            <button className="btn btn-tertiary" onClick={() => handleReset()}>Reset</button>
            <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>Show/Hide {JSON.stringify(show)}</button>
        </div>
    )
}

export default Memorize;
