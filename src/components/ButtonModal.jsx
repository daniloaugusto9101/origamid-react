import React from "react";

const ButtonModal = ({ isModal, setIsModal }) => {
  return (
    <div className="bg-blue-400 p-2 rounded-md cursor-pointer" onClick={() => setIsModal((prev) => !prev)}>
      {isModal ? "Fechar Modal" : "Abrir Modal"}
    </div>
  );
};

export default ButtonModal;
