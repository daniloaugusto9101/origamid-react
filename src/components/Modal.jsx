import React from "react";

const Modal = ({ setIsModal }) => {
  return (
    <div className="bg-gray-400 p-4 rounded-md w-96 h-96">
      <button onClick={() => setIsModal(false)}>Fechar</button>
    </div>
  );
};

export default Modal;
