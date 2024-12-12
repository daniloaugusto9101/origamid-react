import React, { useState } from "react";
import Input from "./Input";

//Objeto com os campos do formulário
const formsFields = {
  name: {
    id: "name",
    type: "text",
    label: "Nome",
    ico: "FaBeer",
  },
  email: {
    id: "email",
    type: "email",
    label: "Email",
    ico: "FaSearch",
  },
  idade: {
    id: "idade",
    type: "number",
    label: "Idade",
    ico: "FaSearch",
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
    <form className="p-6 rounded-lg shadow-md flex flex-col items-center gap-4 bg-slate-200 max-w-[720px]">
      <div>
        <h2 className="text-3xl">Cadastro</h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-6">
          <Input {...formsFields.name} value={formData.name} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Input {...formsFields.email} value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-span-6">
          <Input {...formsFields.idade} value={formData.idade} onChange={handleChange} />
        </div>
      </div>
    </form>
  );
};

export default Form;
