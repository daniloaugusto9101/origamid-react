import React from "react";
import InputList from "../components/INputList";

const Forms3 = () => {
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
    senha: "",
    cep: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <form className="bg-gray-200 p-4" onSubmit={handleSubmit}>
      <main className="flex flex-col gap-5">
        <InputList form={form} handleChange={handleChange} />
        <button className="bg-blue-500 p-2">enviar</button>
      </main>
    </form>
  );
};

export default Forms3;
