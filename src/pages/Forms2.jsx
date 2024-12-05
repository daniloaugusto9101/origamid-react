import React from "react";

const Forms2 = () => {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
  });

  function handleDubmit(event) {
    event.preventDefault();
    console.log("chegou no form");
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }
  return (
    <form onSubmit={handleDubmit}>
      <input type="text" className="border" id="name" value={form.name} onChange={handleChange} />

      <input type="email" className="border" id="email" value={form.email} onChange={handleChange} />
      <button>Enviar</button>
    </form>
  );
};

export default Forms2;
