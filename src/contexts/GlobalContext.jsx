import React from "react";

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [count, setCount] = React.useState(0);
  const user = { name: "Lucas", idade: 26 };
  return <GlobalContext.Provider value={{ count, setCount, user }}>{children}</GlobalContext.Provider>;
};
