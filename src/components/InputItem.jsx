import React from "react";

const InputItem = ({ formsFields, handleChange, input }) => {
  return (
    <>
      {formsFields.map(({ type, id, label }) => (
        <div key={id}>
          <label htmlFor={id}>{label}</label>
          <input type={type} className="border" id={id} value={input.id} onChange={handleChange} />
        </div>
      ))}
    </>
  );
};

export default InputItem;
