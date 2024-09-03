import React, { useState } from 'react';
import GameLogic from './GameLogic';

//Step 1: I define a function with a functional react *component*
function EFW() {
  //create an array of elements that is use in the computerChoice 
  const optionsDropBox = ["Earth", "Wind", "Fire"];

  // create a helper function to create a randomize computer output
  function computerChoice() {
    const randomChoice = Math.floor(Math.random() * 3);
    return optionsDropBox[randomChoice];
  };

  //useState for results
  const [result, setResult] = useState("");
  //useState for score with objects with properties: wins, losses, ties
  //documentation online video: 
  const [score, setScore] = useState({
    wins: 0,
    losses: 0,
    ties: 0
  })

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
    let scoreKeeper = { ...score };

    //gameLogic 
    if (userChoice === computerInput) {
      outcome = <span>Your input is {userChoice} and mine is {computerInput} -- <strong> It's a tie! :/ </strong></span>;
      scoreKeeper.ties = scoreKeeper.ties + 1
    } else if (
      (userChoice === "Earth" && computerInput === "Fire") ||
      (userChoice === "Wind" && computerInput === "Earth") ||
      (userChoice === "Fire" && computerInput === "Wind")
    ) {
      outcome = <span>Your input is {userChoice} and mine is {computerInput} -- <strong> You win! :) </strong></span>;
      scoreKeeper.wins = scoreKeeper.wins + 1
    } else {
      outcome = <span> Your input is {userChoice} and mine is {computerInput} -- <strong> You lose! :( </strong> </span>;
      scoreKeeper.losses = scoreKeeper.losses + 1
    }

    //updates the result state
    setResult(outcome);
    //updates the score state
    setScore(scoreKeeper);
  };
  // Create a reset function 

  const handleReset = () => {
    setResult("");
    setScore({
      wins: 0,
      losses: 0,
      ties: 0
    });
  };

  return (
    <div className="efw-container">

      <div className="efw-score-container">
        <div className="efw-score">
          <h2>Score</h2>
          <p>Wins: {score.wins} Losses: {score.losses} Ties: {score.ties}</p>

          <div className="efw-form">
            <button className="reset-btn" onClick={handleReset}>Play again & Get blown away</button>
          </div>
        </div>
      </div>
      <GameLogic
        title={"Earth, Wind & Fire: Mai's Take on the 'Rock, Paper, Scissors' Game"}
        description={
          <span className="efw-description">
            Hi, welcome to Mai's take on <strong>'Rock, Paper, Scissors'</strong>. Here are the <strong>*RULES*</strong>: <br /><br />
            <strong>Earth</strong> takes out <strong>Fire</strong> <br />
            <strong>Wind</strong> blows away <strong>Earth</strong> <br />
            <strong>Fire</strong> consumes <strong>Wind</strong> <br /><br />
            Have fun!
          </span>
        }
      />

      <form className="efw-form" onSubmit={eWFGame}>
        <label htmlFor="gameElements">Earth, Wind, or Fire</label>
        <select name="gameElements" id="gameElements">
          {optionsDropBox.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button type="submit">Submit</button>
        <p className="efw-result">{result}</p>
      </form>


    </div>
  );
}

export default EFW;