import React from 'react';

const GameLogic = ({title, description, }) => {
  return (
    <div>
      {/*render the title in an <h1> tag*/}
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    
  )
}


export default GameLogic;