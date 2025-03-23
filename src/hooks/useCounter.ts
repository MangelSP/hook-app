import { useState } from "react";

export const useCounter = (initialValue: number) => {

    const [counter, setCounter] = useState(initialValue)

    const handleIncrement = (value: number = 1) => {
        setCounter(
            counter + value
        );
    };

    const handleDecrement = (value: number = 1) => {
        setCounter(
            counter - value
        );
    };

    const handleReset = () => {
        setCounter(initialValue);
    }


    return {
        counter,
        handleIncrement,
        handleDecrement,
        handleReset
    };
}