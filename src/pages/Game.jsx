import { Layout } from '../layout/layout';
import { QuestionCard } from '../components/QuestionCard';
import { Link } from 'react-router-dom';

export const Game = () => {
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
            Timer : <h3>10:00</h3>
          </div>
        </div>
        <div className='questions'>
          <QuestionCard />
        </div>
        <Link to={'/result'} className='btn btn-primary next-button'>
          Next
        </Link>
      </div>
    </Layout>
  );
};
