import { Layout } from '../layout/layout';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  resetGame,
  setCategory,
  setDifficulty,
  setOutOff,
} from 'features/game/gameSlice';
import { categoryName } from 'utils/utils';

export const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(resetGame(0));
    dispatch(
      setCategory({
        name: categoryName(e.target.category.value),
        value: e.target.category.value,
      })
    );
    dispatch(setDifficulty(e.target.difficulty.value));
    switch (e.target.difficulty.value) {
      case 'easy':
        dispatch(setOutOff(10));
        break;
      case 'medium':
        dispatch(setOutOff(20));
        break;
      case 'hard':
        dispatch(setOutOff(30));
        break;
      default:
        break;
    }

    navigate('/game');
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
            <div className='difficulty-option'>
              <input
                type='radio'
                value='easy'
                name='difficulty'
                id='easy'
                required
                className='difficulty-input'
              />
              <label htmlFor='easy' className='difficulty-label'>
                &nbsp; Easy
              </label>
            </div>
            <div className='difficulty-option'>
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
            </div>
            <div className='difficulty-option'>
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
          </div>
          <label htmlFor='rules' className='rules-label'>
            <input type='checkbox' name='rules' id='rules' required /> I have
            read the{' '}
            <Link to={'/rules'} className='rules-link'>
              <i>
                <b>Rules</b>{' '}
              </i>
            </Link>
          </label>
          <button type='submit' to={'/game'} className='btn btn-primary'>
            Start
          </button>
        </form>
      </div>
    </Layout>
  );
};
