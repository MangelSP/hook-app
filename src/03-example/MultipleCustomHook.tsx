import { useCounter } from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";

const MultipleCustomHook = () => {
    const { counter, handleIncrement, handleDecrement, handleReset } = useCounter(1);

    const { data, isLoading, hasError } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);


    return (
        <>
            <h1>MultipleCustomHook</h1>
            <hr />
            {
                isLoading && <p>Cargando...</p>
            }
            {
                hasError && <p>Error: Hubo un error</p>
            }
            {
                !isLoading && (
                    <>
                        <h1>{data?.forms[0].name}</h1>
                        <div className="row">
                            <div className="col-2">
                                <img src={data?.sprites.front_default} alt={data?.forms[0].name} />
                            </div>
                            <div className="col-2">
                                <img src={data?.sprites.back_default} alt={data?.forms[0].name} />
                            </div>
                            <div className="col-2">
                                <img src={data?.sprites.back_shiny} alt={data?.forms[0].name} />
                            </div>

                            <div className="col-2">
                                <img src={data?.sprites.front_shiny} alt={data?.forms[0].name} />
                            </div>
                        </div>
                    </>
                )
            }
            <button className="btn btn-primary" onClick={() => handleDecrement()}>
                Anterior Pokemon
            </button>
            <button className="btn btn-primary" onClick={() => handleIncrement()}>
                Siguiente Pokemon
            </button>

        </>
    )
};

export default MultipleCustomHook;
