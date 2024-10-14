import React from "react";

const Home = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState(0);

  function handleClick() {
    setAtivo(!ativo);
    setDados(dados + 1);
  }

  return (
    <div>
      <h1>Home</h1>
      <button
        className={`${ativo ? "bg-slate-500" : "bg-red-800"} p-4`}
        onClick={handleClick}
      >
        {dados}
      </button>
    </div>
  );
};

export default Home;
