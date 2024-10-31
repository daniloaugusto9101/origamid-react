import React from "react";
import Produtos from "./componentes/Produtos";

const App = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = window.localStorage.getItem("produto");
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    if (produto !== null) {
      window.localStorage.setItem("produto", produto);
    }
  }, [produto]);

  function handleClick(event) {
    setProduto(event.target.value);
  }

  return (
    <div>
      <h1>Home</h1>
      <h2>Preferências: {produto}</h2>
      <div className="flex gap-2">
        <button className="bg-blue-600 p-2 text-white" onClick={handleClick} value="notebook">
          Notebook
        </button>
        <button className="bg-blue-600 p-2 text-white" onClick={handleClick} value="smartphone">
          Smartphone
        </button>
      </div>
      <Produtos produto={produto} />
    </div>
  );
};
