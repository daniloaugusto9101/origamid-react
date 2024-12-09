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
  const [response, setResponse] = React.useState(null);

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log("executou");
    fetch("https://ranekapi.origamid.dev/json/api/usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    }).then((response) => {
      setResponse(response);
    });
  }
  return (
    <form className="bg-gray-200 p-4" onSubmit={handleSubmit}>
      <main className="flex flex-col gap-5">
        <InputList form={form} handleChange={handleChange} />
        <button className="bg-blue-500 p-2">enviar</button>
      </main>
      {response && response.ok && <p>Formulário enviado</p>}
    </form>
  );
};

export default Forms3;
