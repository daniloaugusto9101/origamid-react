import React from "react";

const ProdutosFetch = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const featchProduto = async (produto) => {
    setLoading(true);

    const resp = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${produto}`
    );
    const json = await resp.json();
    setProduto(json);
    setLoading(false);
  };

  function handleClick(e) {
    featchProduto(e.target.innerText);
  }
  return (
    <div>
      <h1>Produtos</h1>
      <div className="flex gap-10">
        <button onClick={handleClick} value="tablet">
          Tablet
        </button>
        <button onClick={handleClick} value="notebook">
          Notebook
        </button>
        <button onClick={handleClick} value="smartphone">
          Smartphone
        </button>
      </div>
      {loading && <p>Carregando...</p>}
      {!loading && produto && (
        <>
          <p>Produto: {produto.nome}</p>
          <p>Preço: {produto.preco}</p>
        </>
      )}
    </div>
  );
};

export default ProdutosFetch;
