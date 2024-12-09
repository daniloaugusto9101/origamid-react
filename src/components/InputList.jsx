import React from "react";
import InputItem from "./InputItem";

const data = [
  {
    fieldName: "nome",
    type: "text",
    text: "Nome",
  },
  {
    fieldName: "email",
    type: "email",
    text: "Email",
  },
  {
    fieldName: "senha",
    type: "password",
    text: "Senha",
  },
  {
    fieldName: "cep",
    type: "text",
    text: "CEP",
  },
  {
    fieldName: "rua",
    type: "text",
    text: "Rua",
  },
  {
    fieldName: "numero",
    type: "text",
    text: "Número",
  },
  {
    fieldName: "bairro",
    type: "text",
    text: "Bairro",
  },
  {
    fieldName: "cidade",
    type: "text",
    text: "Cidade",
  },
  {
    fieldName: "estado",
    type: "text",
    text: "Estado",
  },
];
const InputList = ({ form, handleChange }) => {
  return data.map((input, idx) => <InputItem key={idx} {...input} form={form} handleChange={handleChange} />);
};

export default InputList;
