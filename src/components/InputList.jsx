import React from "react";
import InputItem from "./InputItem";

//Monta o array de objetos com os campos do formulário
const formsFields = [
  {
    type: "text",
    id: "name",
    label: "Nome",
  },
  {
    type: "email",
    id: "email",
    label: "Email",
  },
];

const InputList = () => {
  //Monta objeto somente com o id para usar no estado
  const fields = formsFields.reduce((acc, field) => {
    return {
      ...acc,
      [field.id]: "",
    };
  }, {});

  //Monta um estado único com todos os campos do formulário
  const [input, setInput] = React.useState(fields);
  console.log(input);

  //Função para atualizar o estado de qualquer campo do formulário
  function handleChange({ target }) {
    console.log(target);
    const { id, value } = target;
    setInput({ ...input, [id]: value });
  }
  return (
    <>
      <InputItem formsFields={formsFields} handleChange={handleChange} input={input} />
    </>
  );
};

export default InputList;
