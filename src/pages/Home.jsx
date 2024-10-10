import React from "react";

const Home = () => {
  const [ativo, setAtivo] = React.useState(false);

  return (
    <div>
      <h1>Home</h1>
      <button
        className={`${ativo ? "bg-slate-500" : "bg-red-800"} p-4`}
        onClick={() => setAtivo(!ativo)}
      >
        clique
      </button>
    </div>
  );
};

export default Home;
