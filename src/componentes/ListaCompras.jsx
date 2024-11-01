import React from "react";

const ListaCompras = () => {
  const [lista, setLista] = React.useState(["teste", "teste2"]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setLista([...lista, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <h1>Lista de compras</h1>
      <ul>
        {lista.map((item, index) => (
          <li key={index} className="pl-2">
            {item}
          </li>
        ))}
      </ul>
      <input type="text" className="border bg-slate-400" value={input} onChange={({ target }) => setInput(target.value)} ref={inputElement} /> <br />
      <button className="bg-lime-700" onClick={handleClick}>
        Adicionar
      </button>
    </div>
  );
};

export default ListaCompras;
