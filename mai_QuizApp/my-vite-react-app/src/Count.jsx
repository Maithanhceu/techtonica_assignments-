import { useState } from 'react';
import he from 'he';  
import './Count.css';

//props
function Count({ questions, onGameEnd }) {
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

    
    if (Object.keys(answeredQuestions).length + 1 === questions.length) {
      const finalStatus = count + 1 > 6 ? 'win' : 'lose';
      setGameStatus(finalStatus);
      //my callback()  
      if (onGameEnd) {
        onGameEnd(finalStatus, count + 1); 
      }
    }

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
          <p>{he.decode(question.question)}</p> 
          {question.incorrect_answers.concat(question.correct_answer)
            .map((answer, i) => (
              <button
                id='button'
                key={i}
                type="button"
                onClick={() => handleAnswerClick(answer, question.correct_answer, index)}
                disabled={answeredQuestions[index] !== undefined}
              >
                {he.decode(answer)} 
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
            <p></p>
          )}
        </div>
      )}
    </div>
  );
}

export default Count;
