import React from "react";
import logoImg from "../src/assets/logo.jpg";
import "./css/logo.css";

const Logo = () => {
  return (
    <div className="logo-container">
        <img className="rounded" src={logoImg} alt="Logo" />
    </div>
  )

};

export default Logo;
