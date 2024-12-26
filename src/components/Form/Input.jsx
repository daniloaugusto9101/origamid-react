import React from "react";

const Input = ({ id, label, setValue, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} onChange={({ target }) => setValue(target.value)} {...props} className="p-2 border border-gray-500 rounded-lg w-full" />
    </div>
  );
};

export default Input;
