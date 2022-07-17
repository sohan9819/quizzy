import { Layout } from '../layout/layout';
import { ResultCard } from '../components/ResultCard';

export const Result = () => {
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
            Score : <h3>10 / 20</h3>
          </div>
        </div>
        <div className='questions'>
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <ResultCard />
          <button className='btn btn-primary'>Try Again</button>
        </div>
      </div>
    </Layout>
  );
};
