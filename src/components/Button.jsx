import React from "react";

const Button = ({ text, setValue }) => {
  return (
    <button className="bg-blue-300 p-2 rounded-md font-semibold cursor-pointer" onClick={({ target }) => setValue(target.innerText)}>
      {text}
    </button>
  );
};

export default Button;
