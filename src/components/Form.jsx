import React, { useState } from "react";
import Input from "./Input";
import Textarea from "./Textarea";
import Select from "./Select";

//Objeto com os campos do formulário
const formInput = {
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
  desc: {
    id: "desc",
    type: "",
    label: "Descrição",
    ico: "",
  },
};

const formSelect = [
  {
    id: "",
    label: "Selecione",
    disabled: true,
  },
  {
    id: "fiat",
    label: "Fiat",
    disabled: false,
  },
  {
    id: "fusca",
    label: "Fusca",
    disabled: false,
  },
];

const Form = () => {
  // Monta objeto somente com o id para usar no estado
  const fields = Object.keys(formInput).reduce((acc, key) => {
    return {
      ...acc,
      [key]: "",
    };
  }, {});

  // Monta um estado único com todos os campos do formulário
  const [formData, setFormData] = useState(fields);
  const [select, setSelect] = React.useState("");

  // Função para atualizar o estado de qualquer campo do formulário
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSelect = ({ target }) => {
    setSelect(target.value);
  };
  console.log(select);
  return (
    <form className="p-6 rounded-lg shadow-md flex flex-col items-center gap-4 bg-slate-200 max-w-[720px]">
      <div>
        <h2 className="text-3xl">Cadastro</h2>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className=" col-span-6">
          <Input {...formInput.name} value={formData.name} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Input {...formInput.email} value={formData.email} onChange={handleChange} />
        </div>
        <div className="col-span-6">
          <Input {...formInput.idade} value={formData.idade} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12">
          <Textarea {...formInput.desc} value={formData.desc} onChange={handleChange} />
        </div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-6">
          <Select formSelect={formSelect} select={select} onSelect={onSelect} />
        </div>
      </div>
    </form>
  );
};

export default Form;
