import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];
const SIZES = ["btn--medium", "btn--large"];

export const Button = (children, type, onClick, buttonStyle, buttonSize) => {
  const checkButtonStyle = STYLES.include(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.include(buttonSize) ? buttonStyle : SIZES[0];
  return (
    <Link to="/signIn" className="btn--mobile">
      <button
        classname={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
