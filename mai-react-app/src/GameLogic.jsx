import React from 'react';
import './GameLogic.css'
//create a GameLogic component that takes in two props

function GameLogic({ title, description }) {
  return (
    <div className="game-logic-container">
      <h1 className="game-logic-title">{title}</h1>
      <p className="game-logic-description">{description}</p>
    </div>
  );
}
export default GameLogic;