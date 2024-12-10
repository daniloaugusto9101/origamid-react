import React from "react";

const Forms5 = () => {
  const [select, setSelect] = React.useState("");
  return (
    <div>
      <select 
        className="border border-red-500" 
        value={select} 
        onChange={({ target }) => setSelect(target.value)}>
        <option disabled value="">
          Selecione
        </option>
        <option value="fusca">Fusca</option>
        <option value="corsa">Corsa</option>
        <option value="voyage">Voyage</option>
      </select>
      {select}
    </div>
  );
};

export default Forms5;
