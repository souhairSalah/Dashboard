import React from "react";

const Input = ({
  haveLabel = false,
  label,
  className,
  inputSize = "medium",
  type = "text",
  error = false,
}) => {
  let classNames = `border border-sky-500 ${className}`;
  if (inputSize === "large") {
    classNames += " py-4 px-5 ";
  } else if (inputSize === "small") {
    classNames += " py-2 px-3 ";
  } else {
    classNames += " py-3 px-4 ";
  }
  if(error){
    classNames += " border border-red-600";
  }
  return ( 
    <>
      { haveLabel ? <label>{label}</label> : null }   
      <input 
        type={type}
        inputSize={inputSize}
        className={classNames}
        error={error}

      ></input>
    </>
  );
};

export default Input;
