import React from "react";

const Buttons = (props) => {
  return (
    <button type="button"  className={props.class}>
      {props.text}
    </button>
  );
};

export default Buttons;
