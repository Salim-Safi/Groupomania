import React from "react";

const Input = ({ type, customClass, customPlace }) => {
  return (
    <div>
      <input className={customClass} type={type} placeholder={customPlace} />
    </div>
  );
};

export default Input;
