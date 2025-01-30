import React from "react";
import PageHeader from "../components/PageHeader";

const PageCustomHook = () => {
  const [data, setData] = React.useState(() => {
    const produto = window.localStorage.getItem("produto");
    return produto;
  });

  function storage({ target }) {
    window.localStorage.setItem("produto", target.innerText);
    setData(window.localStorage.getItem("produto"));
  }

  React.useEffect(() => {
    const produto = window.localStorage.getItem("produto");
    setData(produto);
  }, []);

  return (
    <div>
      <PageHeader text="Desafio Hook Custom Hook" />
      <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
        <h2>Contexto Dados de usuário</h2>
        <p>{data}</p>
        <div>
          <button onClick={storage} className="bg-slate-300">
            tablet
          </button>
          <br />
          <button onClick={storage} className="bg-slate-300">
            smartphone
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageCustomHook;
