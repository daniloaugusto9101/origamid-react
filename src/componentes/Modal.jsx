import React from "react";
import Button from "./Button";

const Modal = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className={`fixed inset-0 ${
        isOpen ? "hidden" : "flex"
      } items-center justify-center bg-black bg-opacity-60 `}
    >
      <div className="w-80 rounded-sm bg-slate-200 p-4">
        <Button setIsOpen={setIsOpen} />
        <header>Modal</header>
        <section>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          veniam voluptatem, iure illum nihil distinctio tempora culpa qui
          voluptate tempore temporibus accusamus odio nulla recusandae fuga.
          Deserunt distinctio voluptatem corrupti.
        </section>
      </div>
    </div>
  );
};

export default Modal;
