import React from "react";
import "./Button.css";

const Button = ({ text, onClickFunc }) => {
  return( <button className="theme-button" onClick={onClickFunc}>{text}</button>)
};

export default Button;
