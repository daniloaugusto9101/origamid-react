import React from "react";
import Produtos from "./pages/Produtos";

const App = () => {
  const [ativo, setAtivo] = React.useState(false);
  return (
    <div>
      <button className="bg-slate-500 p-4" onClick={() => setAtivo(!ativo)}></button>
      {ativo && <Produtos />}
    </div>
  );
};

export default App;
