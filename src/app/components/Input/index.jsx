import React from "react";

const Input = ({
  haveLabel = false,
  label,
  className,
  inputSize = "medium",
  type = "text",
  fullWidth = false,
  error = false,
  placeholder,
}) => {
  let classNames = `border  ${className}`;
  if(fullWidth) {
    classNames += " w-full" ; 
  }
  if (inputSize === "large") {
    classNames += " py-4 px-5 ";
  } else if (inputSize === "small") {
    classNames += " py-2 px-3 w-1/2";
  } else {
    classNames += " py-3 px-4 ";
  }
  if(error){
    classNames += " border border-red-600";
  }
  return ( 
    <>
      { haveLabel ? <label className="mb-1">{label}</label> : null }   
      <input 
        type={type}
        inputSize={inputSize}
        className={classNames}
        error={error}
        placeholder={placeholder}
      ></input>
    </>
  );
};

export default Input;
