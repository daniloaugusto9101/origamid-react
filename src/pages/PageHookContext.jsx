import React from "react";
import PageHeader from "../components/PageHeader";
import Usuarios from "../components/Usuarios";
import { GlobalStorage } from "../contexts/GlobalContext";

const PageHookContext = () => {
  return (
    <div>
      <PageHeader text="Desafio Hook useContext" />
      <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
        <h2>Contexto Dados de ususario</h2>
        <GlobalStorage>
          <div>
            <Usuarios />
          </div>
        </GlobalStorage>
      </div>
    </div>
  );
};

export default PageHookContext;
