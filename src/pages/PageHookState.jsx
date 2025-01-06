import React from "react";
import ButtonModal from "../components/ButtonModal";
import Modal from "../components/Modal";

const PageHookState = () => {
  const [isModal, setIsModal] = React.useState(false);
  const [color, setColor] = React.useState(true);
  const [count, setCount] = React.useState(0);
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
    </div>
  );
};

export default PageHookState;
