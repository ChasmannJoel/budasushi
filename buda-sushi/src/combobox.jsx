import React, { useState } from "react";
import "./css/combobox.css";
import combos from "../src/jason/combos.json";
import tablas from "../src/jason/tablas.json";

const ComboBox = () => {
  const [showRolls, setShowRolls] = useState(true);
  const [selectedButton, setSelectedButton] = useState("Rolls");


  const handleRollsClick = () => {
    setShowRolls(true);
    setSelectedButton("Rolls");
  };
  
  const handleTablasClick = () => {
    setShowRolls(false);
    setSelectedButton("Tablas");
  };
  

  return (
    <div className="combocontainer">
      <div className="combo-box">
        <div className="button-container">
          <button className={`button-seleccion ${selectedButton === "Rolls" ? "selected" : ""}`}
          onClick={handleRollsClick}>Rolls</button>
          <button className={`button-seleccion ${selectedButton === "Tablas" ? "selected" : ""}`}
          onClick={handleTablasClick}>Tablas</button>
        </div>
        {showRolls ? (
          <div className="rollsbox">
            {combos.map((combo, index) => (
              <label key={index} className="combo-box__title">
                {combo.title}
                <div className="combo-box__description">({combo.description})</div>
                <div className="combo-box__price">
                  {combo.price}
                  <input type="checkbox" /
                  >
                </div>
              </label>
            ))}
          </div>
        ) : (
          <div className="tablabox">
            {tablas.map((tablas, index) => (
              <label key={index} className="combo-box__title">
                {tablas.title}
                <div className="combo-box__description">({tablas.description})</div>
                <div className="combo-box__price">
                  {tablas.price}
                  <input type="checkbox" />
                </div>
              </label>))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComboBox;