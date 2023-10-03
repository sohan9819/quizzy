import { Layout } from '../layout/layout';
import { QuestionCard } from '../components/QuestionCard';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  categoryNameSelector,
  categoryValueSelector,
  difficultySelector,
  setScore,
  scoreSelector,
  outOffSelector,
} from 'features/game/gameSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';

export const Game = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const categoryName = useSelector(categoryNameSelector);
  const categoryValue = useSelector(categoryValueSelector);
  const difficulty = useSelector(difficultySelector);
  const score = useSelector(scoreSelector);
  const outOff = useSelector(outOffSelector);

  const [questions, setQuestions] = useState('');
  const [apiCallStatus, setApiCallStatus] = useState('Loading');
  const [questionNumber, setQuestionNumber] = useState(0);
  const [gameOver] = useState({ status: false, reason: '' });

  const point = difficulty === 'easy' ? 1 : difficulty === 'medium' ? 2 : 3;

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${categoryValue}&difficulty=${difficulty}&type=multiple`
      )
      .then((res) => res.data)
      .then((data) => {
        console.log(data.results);
        setQuestions(data.results);
        setApiCallStatus('');
      })
      .catch((error) => {
        console.log(error.message);
        setApiCallStatus(error.message);
      });
  }, [categoryValue, difficulty]);

  const checkAnswer = (usrAns) => {
    if (questions[questionNumber].correct_answer === usrAns) {
      console.log('Correct Ans');
      dispatch(setScore(point));
    }
  };

  const nextQuestion = () => {
    questionNumber >= 9
      ? navigate('/result')
      : setQuestionNumber((prev) => prev + 1);
  };

  useEffect(() => {
    console.log(`Score ${score} / ${outOff}`);
  }, [score, outOff]);

  return (
    <Layout>
      <div className='container game'>
        <div className='game-info'>
          <div>
            Category : <h3>{categoryName}</h3>
          </div>
          <div>
            Difficulty : <h3 className='difficulty'>{difficulty} </h3>
          </div>
          <div>
            Total Marks: <h3>{outOff}</h3>
          </div>
        </div>
        <div className='questions'>
          <h1>{apiCallStatus}</h1>
          {!gameOver.status && questions && (
            <QuestionCard
              questionNr={questionNumber + 1}
              question={questions[questionNumber].question}
              options={[
                ...questions[questionNumber].incorrect_answers,
                questions[questionNumber].correct_answer,
              ].sort(() => Math.random() - 0.5)}
              nextQuestion={nextQuestion}
              checkAnswer={checkAnswer}
              correctAnswer={questions[questionNumber].correct_answer}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};
