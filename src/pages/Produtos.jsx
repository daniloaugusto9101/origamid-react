import React from "react";

const produtos = [
  { nome: "Notebook", propriedades: ["16gb ram", "512gb"] },
  { nome: "Smartphone", propriedades: ["2gb ram", "128gb"] },
];
const Produtos = () => {
  return (
    <div>
      <h1 className="mt-10">#Produtos</h1>
      {produtos.map(({ nome, propriedades }) => (
        <div key={nome}>
          <h2>{nome}</h2>
          <ul>
            {propriedades.map((propriedade) => (
              <li key={propriedade} className="ml-4">
                {propriedade}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Produtos;
