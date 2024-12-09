import React from "react";

const Forms4 = () => {
  const [textarea, setTextarea] = React.useState("");
  return (
    <div>
      Forms4
      <div>
        <textarea name="texto" id="texto" value={textarea} onChange={({ target }) => setTextarea(target.value)} className="border border-red-600" />
      </div>
      {textarea}
    </div>
  );
};

export default Forms4;
