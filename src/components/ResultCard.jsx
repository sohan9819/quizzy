export const ResultCard = ({
  questionNr,
  question,
  options,
  userAnswer,
  correctAnswer,
}) => {
  const classNameHandler = (option) => {
    if (option === userAnswer) {
      if (option === correctAnswer) {
        return 'option-label right';
      } else {
        return 'option-label wrong';
      }
    } else if (option === correctAnswer) {
      return 'option-label right';
    } else {
      return 'option-label';
    }
  };

  return (
    <div className='question-card'>
      <div className='question-number'>
        {' '}
        <span className='question-number-text'>Question {questionNr}</span> / 10
      </div>
      <div
        className='question-text'
        dangerouslySetInnerHTML={{ __html: question }}
      ></div>
      <div className='question-options'>
        {options &&
          options.map((option) => {
            return (
              <div
                className={classNameHandler(option)}
                dangerouslySetInnerHTML={{ __html: option }}
              ></div>
            );
          })}
      </div>
    </div>
  );
};
