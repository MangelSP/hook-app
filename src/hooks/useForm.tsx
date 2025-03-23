import { useState } from "react";


export const useForm = (initialForm: any = {}) => {

    const [formState, setformState] = useState(initialForm);

    const onInputChange = ({ target }: unknown) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value,
        });
    }

    const onResetForm = () => {
        setformState(initialForm);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
