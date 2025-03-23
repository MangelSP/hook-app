import { useEffect } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, userName, email, password, onResetForm } = useForm({
    userName: "",
    email: "",
    password: "",
  });

  // const { userName, email, password } = formState;


  return (
    <>
      <h1>Formulario FormWithCustomHook</h1>
      <hr />
      <input
        value={userName}
        onChange={onInputChange}
        type="text"
        className="form-control "
        placeholder="UserName"
        name="userName"
      />
      <input
        type="email"
        placeholder="miguel@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
        className="form-control mt-2"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInputChange}
        className="form-control mt-2"
      />

      <button className="btn btn-primary mt-2" onClick={onResetForm}>Borrar</button>

    </>
  );
};
