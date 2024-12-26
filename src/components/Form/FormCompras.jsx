import React from "react";
import Input from "./Input";
import Select from "./Select";

const FormCompras = () => {
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [produto, setProduto] = React.useState("");
  return (
    <form>
      <Input id="nome" label="Nome" value={nome} setValue={setNome} />
      <Input id="email" label="Email" value={email} setValue={setEmail} />
      <Select options={["smartphone", "computador"]} value={produto} setValue={setProduto} />
    </form>
  );
};

export default FormCompras;
