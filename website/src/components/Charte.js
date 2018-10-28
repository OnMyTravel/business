import React from 'react'

import '../styles/Charte.css';

import Modale from './Modale';
import Button from './Button';

const Charte = ({ todos, onTodoClick }) => {

  return (
  <div className="charte__wrapper">

      <h1>Buttons:</h1>

      <div className="charte__frame">
          <Button link="https://onmy.travel">Primary action</Button>
      </div>
      
      <div className="charte__frame">
          <Button link="https://onmy.travel" alt="second">Second action</Button>
      </div>

      <h1>Modale:</h1>

      <h2>Modale simple</h2>
      <Modale title="Un petit coin de paradis" />

      <h2>Modale with subtitle and icon</h2>
      <Modale title="En route pour l'aventure" subtitle="Aéroport Charles de Gaulle" />
      
  </div>)
}

export default Charte