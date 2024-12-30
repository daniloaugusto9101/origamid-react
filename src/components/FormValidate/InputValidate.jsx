import React from "react";

const InputValidate = ({ id, label, type, placeholder, value, onChange, ...props }) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} className="border border-red-200" />
    </div>
  );
};

export default InputValidate;
