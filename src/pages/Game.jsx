import { Layout } from '../layout/layout';

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
        <form className='questions'>
          <ol className='questions-list'>
            <li className='question'>
              <h2 className='qt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                assumenda architecto, iure sed. Ex?
              </h2>
              <ul className='options'>
                <li className='option'>
                  <input type='radio' name='q1' id='q1opt1' />
                  <label htmlFor='q1opt1'>Option 1</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q1' id='q1opt2' />
                  <label htmlFor='q1opt2'>Option 2</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q1' id='q1opt3' />
                  <label htmlFor='q1opt3'>Option 3</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q1' id='q1opt4' />
                  <label htmlFor='q1opt4'>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <input type='radio' name='q2' id='q2opt1' />
                  <label htmlFor='q2opt1'>Option 1</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q2' id='q2opt2' />
                  <label htmlFor='q2opt2'>Option 2</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q2' id='q2opt3' />
                  <label htmlFor='q2opt3'>Option 3</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q2' id='q2opt4' />
                  <label htmlFor='q2opt4'>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <input type='radio' name='q3' id='q3opt1' />
                  <label htmlFor='q3opt1'>Option 1</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q3' id='q3opt2' />
                  <label htmlFor='q3opt2'>Option 2</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q3' id='q3opt3' />
                  <label htmlFor='q3opt3'>Option 3</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q3' id='q3opt4' />
                  <label htmlFor='q3opt4'>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <input type='radio' name='q4' id='q4opt1' />
                  <label htmlFor='q4opt1'>Option 1</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q4' id='q4opt2' />
                  <label htmlFor='q4opt2'>Option 2</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q4' id='q4opt3' />
                  <label htmlFor='q4opt3'>Option 3</label>
                </li>
                <li className='option'>
                  <input type='radio' name='q4' id='q4opt4' />
                  <label htmlFor='q4opt4'>Option 4</label>
                </li>
              </ul>
            </li>
          </ol>
          <button type='submit' className='btn btn-secondary'>
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
};
