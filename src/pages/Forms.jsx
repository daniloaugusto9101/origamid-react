import React from "react";

const Forms = () => {
  const [name, setName] = React.useState("");
  const [email, setemail] = React.useState("");

  function handleDubmit(event) {
    event.preventDefault();
    //faça alguma coias
    console.log("cheogu no form");
  }
  return (
    <form onSubmit={handleDubmit}>
      <input type="text" className="border" value={name} onChange={(event) => setName(event.target.value)} />

      <input type="email" className="border" value={email} onChange={(event) => setemail(event.target.value)} />
      <button>Enviar</button>
    </form>
  );
};

export default Forms;
