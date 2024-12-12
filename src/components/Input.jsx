import React from "react";
import * as Icons from "react-icons/fa";

const Input = ({ id, label, type, value, ico, onChange }) => {
  const IconComponent = Icons[ico];
  return (
    <div>
      <div>
        <label htmlFor={id}>{label}</label>
      </div>
      <div className="relative">
        <input id={id} name={id} type={type} value={value} onChange={onChange} className="pl-10 pr-4 py-2 border rounded-lg w-full" />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2">{IconComponent && <IconComponent />}</div>
      </div>
    </div>
  );
};

export default Input;
