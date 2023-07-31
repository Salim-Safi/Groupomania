import { React, useContext } from "react";
import { Context } from "../context/Context";
import { Navigate } from "react-router-dom";

const Protected = ({ children }) => {
  const { context } = useContext(Context);
  if (context.user === "") {
    return <Navigate to="/signin" />;
  }
  return children;
};

export default Protected;
