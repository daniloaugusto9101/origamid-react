import React, { useState } from "react";
import Input from "../components/Input";

//Objeto com os campos do formulário
const formsFields = {
  name: {
    id: "name",
    type: "text",
    label: "Nome",
  },
  email: {
    id: "email",
    type: "email",
    label: "Email",
  },
};

const Form = () => {
  // Monta objeto somente com o id para usar no estado
  const fields = Object.keys(formsFields).reduce((acc, key) => {
    return {
      ...acc,
      [key]: "",
    };
  }, {});

  // Monta um estado único com todos os campos do formulário
  const [formData, setFormData] = useState(fields);
  console.log(formData);

  // Função para atualizar o estado de qualquer campo do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <form>
      <Input {...formsFields.name} value={formData.name} onChange={handleChange} />
      <Input {...formsFields.email} value={formData.email} onChange={handleChange} />
    </form>
  );
};

export default Form;
