import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`m-auto flex justify-center flex-col bg-white max-w-md rounded-lg shadow-sm py-8  ${className} `}>
      {children}
    </div>
    //
  );
};

export default Card;
