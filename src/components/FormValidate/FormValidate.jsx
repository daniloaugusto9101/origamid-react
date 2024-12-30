import React from "react";
import InputValidate from "./InputValidate";

const FormValidate = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  function validateCep(value) {
    if (value.length == 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um cep válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }

  function handleBlur({ target }) {
    validateCep(target.value);
  }

  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("enviou");
    } else {
      console.log("Não enviar");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <InputValidate label="CEP" id="cep" type="text" value={cep} onChange={handleChange} onBlur={handleBlur} placeholder="00000-000" />
      {error && <p>{error}</p>}
      <button className="bg-blue-400">Enviar</button>
    </form>
  );
};

export default FormValidate;
