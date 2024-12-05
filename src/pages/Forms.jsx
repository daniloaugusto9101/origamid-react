import React from "react";

const Forms = () => {
  const [name, setName] = React.useState("");
  const [email, setemail] = React.useState("");
  return (
    <form>
      <input type="text" className="border" value={name} onChange={(event) => setName(event.target.value)} />

      <input type="email" className="border" value={email} onChange={(event) => setName(event.target.value)} />
    </form>
  );
};

export default Forms;
