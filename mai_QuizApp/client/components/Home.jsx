import './Home.css';
import Count from './Count';
import { useState } from 'react';

function Home() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');
  const [finalStatus, setFinalStatus] = useState('');
  const [finalScore, setFinalScore] = useState(0);

  const trivia = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/');
      const data = await response.json();
      setQuestions(data.results);
      setError('');
    } catch (error) {
      setError('Error fetching trivia data.');
      setQuestions([]);
      console.error('Error fetching trivia data:', error);
    }
  };

  const handleGameEnd = (status, score) => {
    setFinalStatus(status);
    setFinalScore(score);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <div className="header-content">
          <img
            src="/Mai.png" 
            alt="Pink hair Asian femme presenting person smiling brightly"
            className="header-image"
          />
          <h1 className="header-title">Mai Trivia</h1>
        </div>
        <div> 
          <Count questions={questions} onGameEnd={handleGameEnd} />
        </div>
        <div>
          <button onClick={trivia}>Play Game: Click Here :)</button>
        </div>
  
        {error && <p>{error}</p>}
        {finalStatus && (
          <p>{finalStatus === 'win' ? 'Congratulations on winning!' : 'Sorry, you lost. Better luck next time!'} Final Score: {finalScore}</p>
        )}
      </header>
    </div>
  );
}

export default Home;
