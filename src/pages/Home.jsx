import { Layout } from '../layout/layout';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <Layout>
      <div className='container home'>
        <form className='game-selector'>
          <div className='category-selector'>
            <h2>Category</h2>
            <select name='category' id='category'>
              <option value='9'>General Knowledge</option>
              <option value='10'>Book</option>
              <option value='11'>Film</option>
              <option value='12'>Music</option>
              <option value='17'>Nature</option>
              <option value='18'>Computers</option>
              <option value='19'>Mathematics</option>
            </select>
          </div>
          <div className='difficulty-selector'>
            <h2>Difficulty</h2>
            <label htmlFor='easy'>
              <input
                type='radio'
                value='easy'
                name='difficulty'
                id='easy'
                required
              />
              &nbsp; Easy
            </label>
            <label htmlFor='medium'>
              <input
                type='radio'
                value='medium'
                name='difficulty'
                id='medium'
              />
              &nbsp; Medium
            </label>
            <label htmlFor='hard'>
              <input type='radio' value='hard' name='difficulty' id='hard' />
              &nbsp; Hard
            </label>
          </div>
          <Link to={'/game'} className='btn btn-primary'>
            Start
          </Link>
        </form>
      </div>
    </Layout>
  );
};
