import { Layout } from '../layout/layout';
import { ResultCard } from '../components/ResultCard';
import { Link } from 'react-router-dom';
import {
  scoreSelector,
  outOffSelector,
  userAnswersSelector,
} from 'features/game/gameSlice';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export const Result = () => {
  const score = useSelector(scoreSelector);
  const outOff = useSelector(outOffSelector);
  const userAnswers = useSelector(userAnswersSelector);

  useEffect(() => {
    console.log('User Answers ', userAnswers);
  });

  return (
    <Layout>
      <div className='container game'>
        <div className='game-info'>
          <div>
            Category : <h3>General knowledge</h3>
          </div>
          <div>
            Difficulty : <h3>Hard </h3>
          </div>
          <div>
            Score :{' '}
            <h3>
              {score} / {outOff}
            </h3>
          </div>
        </div>
        <div className='questions'>
          {userAnswers &&
            userAnswers.map((userAns) =>
              userAns ? <ResultCard {...userAns} /> : ''
            )}
          <Link to={'/home'} className='btn btn-primary'>
            Try Again
          </Link>
        </div>
      </div>
    </Layout>
  );
};
