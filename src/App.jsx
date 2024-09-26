import React from "react";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

const App = () => {
  const dados = luana;
  const isActive = dados.ativa ? "Ativa" : "Invativa";
  const classActive = dados.ativa ? "text-green-700" : "text-red-700";
  const totalGastos = dados.compras.reduce((acc, item) => {
    return acc + Number(item.preco.replace("R$ ", ""));
  }, 0);

  return (
    <div className="text-4xl">
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade}</p>
      <p>
        Situação: <span className={`${classActive}`}>{isActive}</span>{" "}
      </p>
      <p>Total de gasto: R$ {totalGastos}</p>
      {totalGastos > 10000 && <small>Você gastou mais que o planejado</small>}
    </div>
  );
};

export default App;
