import React from "react";

const CarCard = ({ children, className }) => {
  return (
    <div className={`p-3 m-3 min-w-[25%] flex flex-col bg-white  rounded-lg shadow-sm  ${className} `}>
      {children}
    </div>
    //
  );
};

export default CarCard;
