import React from "react";

const PageHeader = ({ text }) => {
  return (
    <div className="text-center p-4 text-xl bg-gray-200">
      <h1>{text}</h1>
    </div>
  );
};

export default PageHeader;
