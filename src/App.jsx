import React from "react";
import Produto from "./components/Produto";
import { GlobalStorage } from "./GlobalContext";

const App = () => {
  return (
    <div>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  );
};

export default App;
