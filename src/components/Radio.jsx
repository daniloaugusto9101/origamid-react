import React from "react";

const Radio = ({ formRadio, onRadio, radio }) => {
  return formRadio.map((item) => (
    <div key={item.id}>
      <label htmlFor={item.id}>{item.label}</label>
      <input type="radio" name={item.name} id={item.id} value={item.value} onChange={onRadio} checked={item.value == radio} />
    </div>
  ));
};

export default Radio;
