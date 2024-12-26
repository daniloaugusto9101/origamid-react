import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";
import Checkbox from "./Checkbox";

const FormCompras = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  const [cores, setCores] = React.useState("");
  const [fruta, setFruta] = React.useState([]);
  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select options={["smartphone", "computador"]} value={produto} setValue={setProduto} />
      <Radio options={["Azul", "Vermelho", "Preto"]} value={cores} setValue={setCores} />
      <Checkbox options={["Uva", "Laranja", "Limão"]} value={fruta} setValue={setFruta} />
    </form>
  );
};

export default FormCompras;
