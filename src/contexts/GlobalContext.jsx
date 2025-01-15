import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto/")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  const user = { name: "Lucas", idade: 26 };
  return <GlobalContext.Provider value={{ produtos }}>{children}</GlobalContext.Provider>;
};
