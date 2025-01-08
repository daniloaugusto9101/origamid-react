import React from "react";
import ButtonModal from "../components/ButtonModal";
import Modal from "../components/Modal";

const PageHookState = () => {
  const [isModal, setIsModal] = React.useState(false);
  const [color, setColor] = React.useState(true);
  const [count, setCount] = React.useState(0);
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function handleClik({ target }) {
    setLoading(true);
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${target.value}`)
      .then((response) => response.json())
      .then((json) => setProduto(json))
      .finally(() => setLoading(false));
  }
  return (
    <div>
      <h1 className="text-center bg-black text-white p-4">Método useSate</h1>
      <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
        <h1>Desafio do Modal</h1>
        {isModal && <Modal setIsModal={setIsModal} />}
        <ButtonModal isModal={isModal} setIsModal={setIsModal} />
      </div>
      <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
        <h1>Desafio Botão Cores</h1>
        <button className={`${color ? "bg-blue-400" : "bg-red-400"} p-2 rounded-md cursor-pointer`} onClick={() => setColor((prev) => !prev)}>
          Alternar cor
        </button>
      </div>
      <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
        <h1>Desafio Contador Botão</h1>
        <button className={`bg-blue-400 p-2 rounded-md cursor-pointer`} onClick={() => setCount((prev) => prev + 1)}>
          {count}
        </button>
      </div>
      <div className="border-2 border-gray-400 p-4 m-4">
        <h1 className="text-center">Desafio Featch</h1>
        <div className="flex justify-center items-center gap-2">
          <button className={`bg-blue-400 p-2 rounded-md cursor-pointer`} value="tablet" onClick={handleClik}>
            Tablet
          </button>
          <button className={`bg-blue-400 p-2 rounded-md cursor-pointer`} value={"smartphone"} onClick={handleClik}>
            Smartphone
          </button>
          <button className={`bg-blue-400 p-2 rounded-md cursor-pointer`} value={"notebook"} onClick={handleClik}>
            Notebook
          </button>
        </div>
        {loading && <p>Carregando...</p>}
        {!loading && produto && (
          <>
            <p>Nome: {produto.nome}</p>
            <p>Preco: {produto.preco}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default PageHookState;
