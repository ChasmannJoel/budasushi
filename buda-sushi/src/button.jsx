import React, { useState } from 'react';
import './css/button.css';
import ComboBox from './combobox';

const Button = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);

  const handleClick = () => {
    setMostrarComponente(true);
  };

  return (
    <div className='contenedor'>
      {mostrarComponente ? (
        <ComboBox />
      ) : (
        <button className="cta-button" onClick={handleClick}>Hace tu pedido</button>
      )}
    </div>
  );
};

export default Button;
