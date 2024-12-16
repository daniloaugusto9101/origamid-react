import React from "react";

const Select = ({ formSelect, select, onSelect }) => {
  return (
    <select className="border border-red-500" value={select} onChange={onSelect}>
      {formSelect.map((item) => (
        <option key={item.id} value={item.id} disabled={item.disabled}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default Select;
