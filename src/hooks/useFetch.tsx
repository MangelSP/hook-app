import { useEffect, useState } from "react";


const localCache: Record<string, any> = {};


const useFetch = (url: string) => {


    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: {}
    });




    useEffect(() => {
        getFetch();
    }, [url])


    const setIsLoading = (isLoading: boolean) => {
        setState({
            ...state,
            isLoading
        });
    }

    const getFetch = async () => {
        setIsLoading(true);
        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: {}
            });
            return;
        }
        const resp = await fetch(url);
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                } as const
            });
            return;
        }

        const data = await resp.json();
        localCache[url] = data;
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: {}
        });
    }



    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
export default useFetch;
