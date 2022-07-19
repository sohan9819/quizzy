export const ResultCard = () => {
  return (
    <div className='question-card'>
      <div className='question-number'>
        {' '}
        <span className='question-number-text'>Question 1 </span> / 10
      </div>
      <div className='question-text'>
        What was the name of singer Frank Ocean&#039;s second studio album,
        which was released on August 20, 2016?
      </div>
      <div className='question-options'>
        <div className='option-label right'>Option 1</div>
        <div className='option-label'>Option 2</div>
        <div className='option-label wrong'>Option 3</div>
        <div className='option-label'>Option 4</div>
      </div>
    </div>
  );
};
