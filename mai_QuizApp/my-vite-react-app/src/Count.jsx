import { useState } from 'react';
import he from 'he';  
import './Count.css';

function Count({ questions }) {
  const [count, setCount] = useState(0);
  const [previousAn, setPreviousAn] = useState({});
  const [answeredQuestions, setAnsweredQuestions] = useState({});
  const [gameStatus, setGameStatus] = useState('');

  const handleAnswerClick = (answer, correctAnswer, index) => {
    if (answeredQuestions[index]) {
      return;
    }

    if (answer === correctAnswer) {
      setPreviousAn(prevAn => ({
        ...prevAn,
        [index]: 'Correct -- go to next question!'
      }));
      setCount(prevCount => prevCount + 1);
    } else {
      setPreviousAn(prevAn => ({
        ...prevAn,
        [index]: 'Incorrect :( (go to next question)'
      }));
    }

    setAnsweredQuestions(prevAnswered => ({
      ...prevAnswered,
      [index]: true
    }));

    // Check if all questions are answered
    if (Object.keys(answeredQuestions).length + 1 === questions.length) {
      if (count + 1 > 6) {
        setGameStatus('win');
      } else {
        setGameStatus('lose');
      }
    }

    // Clear feedback after 1 second
    setTimeout(() => {
      setPreviousAn(prevAn => ({
        ...prevAn,
        [index]: null
      }));
    }, 1000);
  };

  return (
    <div>
      <p id='score'>Score: {count}</p>
      {questions.map((question, index) => (
        <div key={index}>
          <p>{he.decode(question.question)}</p> {/* Use `he.decode` here */}
          {question.incorrect_answers.concat(question.correct_answer)
            .map((answer, i) => (
              <button
                id='button'
                key={i}
                type="button"
                onClick={() => handleAnswerClick(answer, question.correct_answer, index)}
                disabled={answeredQuestions[index] !== undefined}
              >
                {he.decode(answer)} {/* Use `he.decode` here */}
              </button>
            ))}
          {previousAn[index] && <p>{previousAn[index]}</p>}
        </div>
      ))}
      {gameStatus && (
        <div>
          {gameStatus === 'win' ? (
            <p>Congratulations! You won the game!</p>
          ) : (
            <p>Game over! You lost the game. Try again!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Count;
