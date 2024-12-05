import React from "react";

const InputItem = ({ fieldName, type, text, form, handleChange }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={fieldName}>{text}</label>
      <input value={form[fieldName]} type={type} onChange={handleChange} name={fieldName} id={fieldName} className="border border-gray-800" />
    </div>
  );
};

export default InputItem;
