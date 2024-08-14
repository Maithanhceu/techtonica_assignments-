
import './App.css';
import GameLogic from './GameLogic';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <GameLogic 
        title={"Earth, Wind & Fire: Mai's Take on the 'Rock, Paper, Scissors' Game"} 
        description={"Hi, welcome to Mai take on 'Rock, Paper, Scissors'. Here are the *RULES*. Earth takes out Fire. Wind blows away Earth. Fire consumes Wind. Have fun!"}/>
      </header>
    </div>
  );
}

export default App;
