import React from "react";

const Input = ({ id, label, type, value, onChange, className }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type={type} value={value} onChange={onChange} className="border border-red-500" />
    </div>
  );
};

export default Input;
