import React, { useState } from 'react';
import GameLogic from './GameLogic';

//Step 1: I define a function with a functional react *component*
function EFW() {
  //create an array of elements that is use in the computerChoice 
  const optionsDropBox = ["Earth", "Wind", "Fire"];

  // create a helper function to create a randomize computer output
  const computerChoice = () => {
    const randomChoice = Math.floor(Math.random() * 3);
    return optionsDropBox[randomChoice];
  };

  //useState for results
  const [result, setResult] = useState("");
  //useState for score 
  const [score, setScore] = useState({wins: 0, losses: 0, ties: 0})

  //Game Logic Handler 
  const eWFGame = (event) => {
    //prevents default form submission
    event.preventDefault();
    //grabs the user value 
    const userChoice = event.target.gameElements.value;
    //grabs the computer input 
    const computerInput = computerChoice();

    //this holds the outcome message 
    let outcome = "";
    //creates a copy of the score 
    let scoreKeeper = {...score};

    //gameLogic 
    if (userChoice === computerInput) {
      outcome = `Your input is ${userChoice} and mine is ${computerInput} -- It's a tie! :/ `;
      scoreKeeper.ties = scoreKeeper.ties + 1
    } else if (
      (userChoice === "Earth" && computerInput === "Fire") ||
      (userChoice === "Wind" && computerInput === "Earth") ||
      (userChoice === "Fire" && computerInput === "Wind")
    ) {
      outcome = `Your input is ${userChoice} and mine is ${computerInput} -- You win! :)`;
      scoreKeeper.wins = scoreKeeper.wins + 1
    } else {
      outcome = `Your input is ${userChoice} and mine is ${computerInput} -- You lose! :(`;
      scoreKeeper.losses = scoreKeeper.losses + 1
    }

    //updates the result state
    setResult(outcome);
    //updates the score state
    setScore(scoreKeeper);
  };

  return (
    <div>
      {/* input from another component */}
      <GameLogic
        title={"Earth, Wind & Fire: Mai's Take on the 'Rock, Paper, Scissors' Game"}
        description={
          <span>
            Hi, welcome to Mai's take on <strong>'Rock, Paper, Scissors'</strong>. Here are the <strong>*RULES*</strong>: <br /><br />
            <strong>Earth</strong> takes out <strong>Fire</strong> <br />
            <strong>Wind</strong> blows away <strong>Earth</strong> <br />
            <strong>Fire</strong> consumes <strong>Wind</strong> <br /><br />
            Have fun!
          </span>
        }
      />

      <div>
        {/* where I hold the scores */}
        <h2>Score </h2>
        <p>Wins: {score.wins} <br/> Losses: {score.losses} <br/> Ties: {score.ties}</p>
      </div>
      {/* renders a form that triggers these eWF function*/}
      <form onSubmit={eWFGame}>
        <label htmlFor="gameElements">Earth, Wind, or Fire</label>
        <select name="gameElements" id="gameElements">
          {optionsDropBox.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
        <p>{result}</p>
      </form>
    </div>
  );
}

//export EFW
export default EFW;