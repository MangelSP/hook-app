import { useCallback, useState } from "react";
import ShowIncrement from "./ShowIncrement";

const CallBackHook = () => {
    const [counter, setCounter] = useState(1);


    const handleIncrementMemo = useCallback((value: number) => {
        setCounter((c) => c + value);
    }, []);



    return (
        <div>
            <h1>CallBackHook: {counter}</h1>
            <hr />
            <ShowIncrement increment={handleIncrementMemo} />
        </div>
    )
}

export default CallBackHook;
