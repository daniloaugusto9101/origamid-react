import React from "react";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";
import ProdutosFetch from "./pages/ProdutosFetch";

const App = () => {
  const { pathname } = window.location;
  const Pagina = pathname === "/" ? Home : Produtos;
  return (
    <>
      <ProdutosFetch />
    </>
  );
};

export default App;
