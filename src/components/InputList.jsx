import React from "react";
import InputItem from "./InputItem";

const InputList = ({ formsFields }) => {
  return (
    <>
      {input.name}
      <InputItem formsFields={formsFields} handleChange={handleChange} input={input} />
    </>
  );
};

export default InputList;
