import React from "react";
import { GlobalContext } from "../contexts/GlobalContext";

const UserApi = () => {
  const { produtos } = React.useContext(GlobalContext);
  if (produtos === null) return null;
  return (
    <div>
      <h2>Produtos</h2>
      {produtos.map((produto) => (
        <p key={produto.id}>- {produto.nome}</p>
      ))}
    </div>
  );
};

export default UserApi;
