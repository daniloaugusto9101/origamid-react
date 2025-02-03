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
  const [proxPergunta, setProxPergunta] = React.useState(0); // Armazena o estado da proxima pergunta
  const [acertos, setAcertos] = React.useState(0); // Armazena a quantidade de acertos

  const onRadio = (idPergunta, respostaSelecionada) => {
    setRadio((prev) => ({
      ...prev,
      [idPergunta]: respostaSelecionada,
    }));
  };

  const handleNext = () => {
    totalAcertos(radio[perguntas[proxPergunta].id]);
    if (proxPergunta < perguntas.length) setProxPergunta((prev) => prev + 1);
  };

  const totalAcertos = (respSelecionada) => {
    if (respSelecionada == perguntas[proxPergunta].resposta) {
      setAcertos((prev) => prev + 1);
    }
    console.log("acertos", acertos);
  };

  const handlePrev = () => {
    if (proxPergunta > 0) setProxPergunta((prev) => prev - 1);
  };

  return (
    <div>
      {proxPergunta >= perguntas.length ? (
        <h1>Parabéns, você acertou {acertos} perguntas</h1>
      ) : (
        <>
          <div className="flex flex-col gap-4 p-10">
            <p>
              Nº {proxPergunta + 1} - {perguntas[0].pergunta}
            </p>
            {perguntas[proxPergunta].options.map((resp, index) => (
              <div key={index}>
                <input type="radio" name={perguntas[proxPergunta].id} value={resp} id={`${perguntas[proxPergunta].id}-resp${index}`} onChange={() => onRadio(perguntas[proxPergunta].id, resp)} checked={radio[perguntas[proxPergunta].id] === resp} />
                <label htmlFor={`${perguntas[proxPergunta].id}-resp${index}`}>{resp}</label>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-5">
            <button className="bg-blue-400 p-2" onClick={handlePrev}>
              Anterior
            </button>
            <button className="bg-blue-400 p-2" onClick={handleNext}>
              Próximo
            </button>
          </div>

          {/* Exibe as respostas selecionadas */}
          <h3>Respostas Selecionadas:</h3>
          <pre>{JSON.stringify(radio, null, 2)}</pre>
        </>
      )}
    </div>
  );
};

export default PageDesafioFormulario;
