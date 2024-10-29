import React from 'react'
import EFW from './EFW';

function HandleReset() {
    const handleReset = () => {
        setResult("");
        setScore({
          wins: 0,
          losses: 0,
          ties: 0
        });
      };
    
  return (
    <div>
        {/* Passing a prop to the EFW component */}
        <EFW handleReset={handleReset}/>
    </div>
  )
}

export default HandleReset