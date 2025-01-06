import React from "react";
import InputValidate from "./InputValidate";
import useForm from "../../hooks/useForm";

const FormValidate = () => {
  const cep = useForm("cep");

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("enviou");
    } else {
      console.log("Não enviar");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputValidate label="CEP" id="cep" type="text" {...cep} placeholder="00000-000" />

      <button className="bg-blue-400">Enviar</button>
    </form>
  );
};

export default FormValidate;
