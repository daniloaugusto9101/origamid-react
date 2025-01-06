import React from "react";

const InputValidate = ({ id, label, type, placeholder, value, onChange, onBlur, error }) => {
  return (
    <div>
      <label htmlFor={id}>{label} </label>
      <input id={id} name={id} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} className="border border-red-200" />
      {error && <p>{error}</p>}
    </div>
  );
};

export default InputValidate;
