import React from "react";

const Button = ({ setIsOpen }) => {
  return (
    <button
      className="bg-red-400 p-2"
      onClick={() => setIsOpen((prev) => !prev)}
    >
      X
    </button>
  );
};

export default Button;
