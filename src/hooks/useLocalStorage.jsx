import React from "react";

const useLocalStorage = (key, produto) => {
  const [data, setData] = React.useState(() => {
    const produto = window.localStorage.getItem(key);
    return produto;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, data);
  }, [key, data]);

  return [data, setData];
};

export default useLocalStorage;
