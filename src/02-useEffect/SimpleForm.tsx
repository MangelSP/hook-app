import { useEffect, useState } from "react";
import Message from "../Components/Message";

export const SimpleForm = () => {
    
  const [formState, setformState] = useState({
    userName: "Miguel",
    email: "mangeldarks@gmail.com",
  });

  const { email, userName } = formState;

  useEffect(() => {
    // console.log("username is changed");
  }, [userName]);
  
  useEffect(() => {
    // console.log("email is changed");
  }, [email]);

  useEffect(() => {
    // console.log("formState is changed");
  }, [formState]);


  const onInputChange = ({ target } : unknown) => {
    const { name, value} = target;
    setformState({
        ...formState,
        [name]: value,
    })
  }

  return (
    <>
      <h1>Formulario Simple</h1>
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

      <br />
      {
        userName == "Miguel Angel Sanchez" && <Message/>
      }
    </>
  );
};
