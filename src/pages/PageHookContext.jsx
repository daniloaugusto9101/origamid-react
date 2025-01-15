import React from "react";
import PageHeader from "../components/PageHeader";
import Usuarios from "../components/Usuarios";
import { GlobalStorage } from "../contexts/GlobalContext";
import UserApi from "../components/UserApi";

const PageHookContext = () => {
  return (
    <GlobalStorage>
      <div>
        <PageHeader text="Desafio Hook useContext" />
        <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
          <h2>Contexto Dados de usuário</h2>
          <div>
            <Usuarios />
          </div>
        </div>
        <div className="flex flex-col items-center border-2 border-gray-400 p-4 m-4">
          <h2>Contexto Global com API</h2>
          <UserApi />
        </div>
      </div>
    </GlobalStorage>
  );
};

export default PageHookContext;
