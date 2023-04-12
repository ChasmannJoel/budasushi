import React from "react";
import "./css/combobox.css";
import combos from '../src/jason/combos.json'

const ComboBox = () => {
  return (
    <div className="combocontainer">
      <div className="combo-box">
        {combos.map((combo, index) => (
          <label key={index} className="combo-box__title">
            {combo.title}
            <div className="combo-box__description">({combo.description})</div>
            <div className="combo-box__price">{combo.price}<input type="checkbox" /></div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default ComboBox;  