import { Layout } from '../layout/layout';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const submithandler = (e) => {
    e.preventDefault();
    console.log(e.target.category.value);
    console.log(e.target.difficulty.value);
    navigate('/game ');
  };

  return (
    <Layout>
      <div className='container home'>
        <form className='game-selector' onSubmit={submithandler}>
          <div className='category-selector'>
            <h2>Category</h2>
            <select name='category' id='category'>
              <option value=''>Any Category</option>
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
            <input
              type='radio'
              value='easy'
              name='difficulty'
              id='easy'
              required
              className='difficulty-input'
              checked
            />
            <label htmlFor='easy' className='difficulty-label'>
              &nbsp; Easy
            </label>
            <input
              type='radio'
              value='medium'
              name='difficulty'
              id='medium'
              className='difficulty-input'
            />
            <label htmlFor='medium' className='difficulty-label'>
              &nbsp; Medium
            </label>
            <input
              type='radio'
              value='hard'
              name='difficulty'
              id='hard'
              className='difficulty-input'
            />
            <label htmlFor='hard' className='difficulty-label'>
              &nbsp; Hard
            </label>
          </div>
          <button type='submit' to={'/game'} className='btn btn-primary'>
            Start
          </button>
        </form>
      </div>
    </Layout>
  );
};
