import React from "react";

const Button = ({ children, customStyle, customTextStyle, ...props }) => {
  return (
    <button className={`${customStyle} ${customTextStyle}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
