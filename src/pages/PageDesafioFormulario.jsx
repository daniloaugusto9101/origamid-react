import React from "react";

const perguntas = [
  {
    pergunta: "Qual método é utilizado para criar componentes?",
    options: ["React.makeComponent()", "React.createComponent()", "React.createElement()"],
    resposta: "React.createElement()",
    id: "p1",
  },
  {
    pergunta: "Como importamos um componente externo?",
    options: ['import Component from "./Component"', 'require("./Component")', 'import "./Component"'],
    resposta: 'import Component from "./Component"',
    id: "p2",
  },
  {
    pergunta: "Qual hook não é nativo?",
    options: ["useEffect()", "useFetch()", "useCallback()"],
    resposta: "useFetch()",
    id: "p3",
  },
  {
    pergunta: "Qual palavra deve ser utilizada para criarmos um hook?",
    options: ["set", "get", "use"],
    resposta: "use",
    id: "p4",
  },
];

const PageDesafioFormulario = () => {
  const [radio, setRadio] = React.useState({}); // Armazena a seleção de cada pergunta
  console.log(radio);

  const onRadio = (idPergunta, respostaSelecionada) => {
    setRadio((prev) => ({
      ...prev,
      [idPergunta]: respostaSelecionada,
    }));
  };

  return (
    <div className="flex flex-col gap-4 p-10">
      {perguntas.map((questao) => (
        <div key={questao.id}>
          <p>{questao.pergunta}</p>
          {questao.options.map((resp, index) => (
            <div key={index}>
              <input type="radio" name={questao.id} value={resp} id={`${questao.id}-resp${index}`} onChange={() => onRadio(questao.id, resp)} checked={radio[questao.id] === resp} />
              <label htmlFor={`${questao.id}-resp${index}`}>{resp}</label>
            </div>
          ))}
        </div>
      ))}

      {/* Exibe as respostas selecionadas */}
      <h3>Respostas Selecionadas:</h3>
      <pre>{JSON.stringify(radio, null, 2)}</pre>
    </div>
  );
};

export default PageDesafioFormulario;
