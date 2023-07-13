import React from 'react';

const Button = ({
  children,
  className,
  type = "button",
  buttonSize = "medium",
  fullWidth = false,
  loading = false,
}) => {

  let classNames = `rounded ${className}`;

  if(fullWidth) {
    classNames += " w-full" ; 
  }
  if (buttonSize === "large") {
    classNames += " py-4 px-5 text-lg";
  } else if (buttonSize === "small") {
    classNames += " py-2 px-3 text-sm";
  } else {
    classNames += " py-3 px-4 text-base";
  }
  
  return (
    <button type={type}
    className={classNames}
    >
     {loading ? "loading..." : children} 
    </button>
  );
};



export default Button;
