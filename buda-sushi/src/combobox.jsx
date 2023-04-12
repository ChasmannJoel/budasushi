import React from "react";
import "./css/combobox.css";

const ComboBox = ({ title, price }) => {
  return (
    <div className="combocontainer">
      <div className="combo-box">

        <div className="combo-box__title">combo1
          <div className="combo-box__price">34353$</div>
        </div>
        <div className="combo-box__title">combo2
          <div className="combo-box__price">34353$</div>
        </div>
        <div className="combo-box__title">combo3
          <div className="combo-box__price">34353$</div>
        </div>
        <div className="combo-box__title">combo4
          <div className="combo-box__price">34353$</div>
        </div>
        <div className="combo-box__title">combo5
          <div className="combo-box__price">34353$</div>
        </div>
        <div className="combo-box__title">combo6
          <div className="combo-box__price">34353$</div>
        </div>
        
      </div>
    </div>
    
  );
};

export default ComboBox;