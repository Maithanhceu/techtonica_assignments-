import React from 'react';

// const GameLogic = ({title, description, }) => {
//   return (
//     <div>
//       {/*render the title in an <h1> tag*/}
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </div>

//   )
// }

const optionsDropBox = ["Earth", "Wind", "Fire"];
const myForm = {
  htmlFor: "elements",
  name: "Elements",
  id: "gameElements"
};

function GameLogic() {
  return (
    <div>
      <h1>Earth, Wind & Fire: Mai's Take on the 'Rock, Paper, Scissors' Game</h1>
      <p>
        Hi, welcome to Mai's take on <strong>'Rock, Paper, Scissors'</strong>. Here are the <strong>*RULES*</strong>: <br /> <br />
        <strong>Earth</strong> takes out <strong>Fire</strong> <br />
        <strong>Wind</strong> blows away <strong>Earth</strong> <br />
        <strong>Fire</strong> consumes <strong>Wind</strong> <br /><br />
        Have fun!
      </p>
      <form>
        <label htmlFor={myForm.htmlFor}>Earth, Wind, or Fire</label>
        <select name={myForm.name} id={myForm.id}>
          {optionsDropBox.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default GameLogic;