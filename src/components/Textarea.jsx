import React from "react";

const Textarea = ({ id, label, type, value, ico, onChange }) => {
  return (
    <div>
      <textarea name={id} id={id} value={value} onChange={onChange} className="border border-red-600" rows="4" cols="50" />
    </div>
  );
};

export default Textarea;
