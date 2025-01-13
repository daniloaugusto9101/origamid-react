import React from "react";
import PageHeader from "../components/PageHeader";
import Button from "../components/Button";

const PageHookEffect = () => {
  const [produto, setProduto] = React.useState(null);
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    window.localStorage.getItem("produto") && setProduto(window.localStorage.getItem("produto"));
  }, []);

  React.useEffect(() => {
    produto && window.localStorage.setItem("produto", produto);
  }, [produto]);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [produto]);

  return (
    <div>
      <PageHeader text="Desafio Hook useEffect" />
      <div>
        <h2>Preferências: {produto && produto}</h2>
        {data && (
          <div>
            <p>{data.id}</p>
            <p>{data.preco}</p>
          </div>
        )}
        <div className="flex space-x-2">
          <Button text="smartphone" setValue={setProduto} />
          <Button text="notebook" setValue={setProduto} />
        </div>
      </div>
    </div>
  );
};

export default PageHookEffect;
