import React from 'react';

export const QuestionCard = () => {
  return (
    <form className='question-card'>
      <div className='question-number'>
        {' '}
        <span className='question-number-text'>Question 1 </span> / 10
      </div>
      <div className='question-text'>
        What was the name of singer Frank Ocean&#039;s second studio album,
        which was released on August 20, 2016?
      </div>
      <div className='question-options'>
        <input
          type='radio'
          name='option'
          id='option1'
          className='option-input'
        />
        <label htmlFor='option1' className='option-label '>
          Option 1
        </label>
        <input
          type='radio'
          name='option'
          id='option2'
          className='option-input'
        />
        <label htmlFor='option2' className='option-label'>
          Option 2
        </label>
        <input
          type='radio'
          name='option'
          id='option3'
          className='option-input'
        />
        <label htmlFor='option3' className='option-label'>
          Option 3
        </label>
        <input
          type='radio'
          name='option'
          id='option4'
          className='option-input'
        />
        <label htmlFor='option4' className='option-label '>
          Option 4
        </label>
      </div>
    </form>
  );
};
