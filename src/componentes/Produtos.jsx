import React from "react";

const Produtos = ({ produto }) => {
  const [dados, setDados] = React.useState(null);
  React.useEffect(() => {
    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((resp) => resp.json())
        .then((json) => setDados(json));
    }
  }, [produto]);
  return (
    <div>
      <h1>Produtos</h1>
      {dados && (
        <div>
          <h2>{dados.nome}</h2>
          <p>R$ {dados.preco}</p>
          <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
        </div>
      )}
    </div>
  );
};

export default Produtos;

// React com useRef
