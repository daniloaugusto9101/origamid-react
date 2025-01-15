import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const Usuarios = () => {
  const { count, setCount, user } = React.useContext(GlobalContext);
  console.log(user);
  return (
    <div>
      <p>Nome: {user.name}</p>
      <p>Idade: {user.idade}</p>
      <p>contador: {count}</p>
      <button className="bg-blue-400 p-2 cursor-pointer" onClick={() => setCount((prev) => prev + 1)}>
        aumetar
      </button>
    </div>
  );
};

export default Usuarios;
