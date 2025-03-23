import { useRef } from "react";

const FocusScreen = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        console.log(inputRef);
        inputRef.current?.select();
    }


    return (
        <div>
            <h1>Focus Screen</h1>
            <input
                ref={inputRef}
                type="text"
                placeholder="Nombre"
                className="form-control"
            />

            <input
                type="text"
                placeholder="Apellido"
                className="form-control mt-2"
            />

            <button className="btn btn-primary mt-2" onClick={handleClick}>Focus</button>
        </div>
    )
}

export default FocusScreen;
