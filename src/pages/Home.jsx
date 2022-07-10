import { Layout } from '../layout/layout';
export const Home = () => {
  return (
    <Layout>
      <div className='container home'>
        <form className='game-selector'>
          <div className='category-selector'>
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
            <label htmlFor='easy'>
              <input type='radio' name='difficulty' id='easy' required />
              &nbsp; Easy
            </label>
            <label htmlFor='medium'>
              <input type='radio' name='difficulty' id='medium' />
              &nbsp; Medium
            </label>
            <label htmlFor='hard'>
              <input type='radio' name='difficulty' id='hard' />
              &nbsp; Hard
            </label>
          </div>
          <button className='btn btn-primary'>Start</button>
        </form>
      </div>
    </Layout>
  );
};
