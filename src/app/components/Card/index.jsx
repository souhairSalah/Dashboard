import React from "react";

const Card = ({ children, className }) => {
  return (
    <div className={`p-10 flex flex-col bg-white  rounded-lg shadow-sm  ${className} `}>
      {children}
    </div>
    //
  );
};

export default Card;
