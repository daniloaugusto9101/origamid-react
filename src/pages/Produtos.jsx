import React from "react";
import useFetch from "../hooks/useFetch";

const Produtos = () => {
  const { request, data, loading, error } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request("https://ranekapi.origamid.dev/json/api/produto");
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data) {
    return (
      <div>
        <h1>Produtos</h1>
        {data.map((produto) => (
          <div key={produto.id}>
            <h1>
              <b>{produto.nome}</b>
            </h1>
          </div>
        ))}
      </div>
    );
  } else {
    return null;
  }
};

export default Produtos;
