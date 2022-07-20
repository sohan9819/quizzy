import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { resetGame, addUserAnswers } from 'features/game/gameSlice';
import { useDispatch } from 'react-redux';

export const QuestionCard = ({
  questionNr,
  question,
  options,
  nextQuestion,
  checkAnswer,
  correctAnswer,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  /* 
  export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
  */

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.option.value);
    checkAnswer(e.target.option.value);
    dispatch(
      addUserAnswers({
        questionNr: questionNr,
        question: question,
        options: options,
        userAnswer: e.target.option.value,
        correctAnswer: correctAnswer,
      })
    );
    nextQuestion();
  };

  const quitHandler = (e) => {
    dispatch(resetGame());
    navigate('/');
  };

  return (
    <>
      <form
        className='question-card'
        id='question-form'
        onSubmit={submitHandler}
      >
        <div className='question-number'>
          {' '}
          <span className='question-number-text'>Question {questionNr} </span> /
          10
        </div>
        <div
          className='question-text'
          dangerouslySetInnerHTML={{ __html: question }}
        ></div>
        <div className='question-options'>
          {options.map((option, index) => (
            <div className='option'>
              <input
                type='radio'
                name='option'
                id={`option${index}`}
                className='option-input'
                value={option}
                required
              />
              <label
                htmlFor={`option${index}`}
                className='option-label'
                dangerouslySetInnerHTML={{ __html: option }}
              ></label>
            </div>
          ))}
        </div>
      </form>
      <div className='navigating-buttons'>
        <button onClick={quitHandler} className='btn btn-secondary next-button'>
          Quit
        </button>
        <button
          type='submit'
          form='question-form'
          className='btn btn-primary next-button'
        >
          Next
        </button>
      </div>
    </>
  );
};
