import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {

    const { counter, handleIncrement,handleDecrement, handleReset } = useCounter(10);

  return (
    <>
    <h1>Counter with hook: {counter}</h1>
    <hr />
    
    <button onClick={() => handleIncrement(2)} className="btn btn-primary ">+1</button>
    <button onClick={handleReset} className="btn btn-primary">Reset</button>
    <button onClick={() => handleDecrement(2)}className="btn btn-primary">-1</button>
    
    </>
  )
};
