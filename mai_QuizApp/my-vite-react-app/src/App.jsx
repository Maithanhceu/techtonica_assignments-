import './App.css';
import Count from './Count';
import { useState } from 'react';

function App() {
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState('');

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

  return (
    <div className='App'>
      <header className='App-header'>
        <div className="header-content">
          <img
            src="/Mai.png" // Ensure this path is correct
            alt="Pink hair Asian femme presenting person smiling brightly"
            className="header-image"
          />
          <h1 className="header-title">Mai Trivia</h1>
        </div>
        <div>
          {/* Render the Count component and pass questions as a prop */}
          <Count questions={questions} />
        </div>
        <div>
          {/* Button to fetch trivia questions */}
          <button onClick={trivia}>Play Game: Click Here :)</button>
        </div>
        {error && <p>{error}</p>}
      </header>
    </div>
  );
}

export default App;
