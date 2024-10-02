import React from "react";
import Menu from "./componentes/Menu";
import Produtos from "./pages/Produtos";
import Home from "./pages/Home";

const App = () => {
  const { pathname } = window.location;
  const Pagina = pathname === "/" ? Home : Produtos;
  return (
    <>
      <Menu />
      <Pagina />
    </>
  );
};

export default App;
