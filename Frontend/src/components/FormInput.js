import React from "react";

const FormInput = (props) => {
  return (
    <div className="form-input-wrapper">
      <label className="label-wrapper" for={props.name}>
        {props.text}
      </label>
      <input className="input-wrapper" type={props.type} id={props.name} />
    </div>
  );
};

export default FormInput;
