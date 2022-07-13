import { Layout } from '../layout/layout';

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
          <ol className='questions-list'>
            <li className='question'>
              <h2 className='qt'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                assumenda architecto, iure sed. Ex?
              </h2>
              <ul className='options'>
                <li className='option'>
                  <label className=''>Option 1</label>
                </li>
                <li className='option'>
                  <label className=''>Option 2</label>
                </li>
                <li className='option'>
                  <label className='wrong'>Option 3</label>
                </li>
                <li className='option'>
                  <label className=''>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <label className=''>Option 1</label>
                </li>
                <li className='option'>
                  <label className='right'>Option 2</label>
                </li>
                <li className='option'>
                  <label className=''>Option 3</label>
                </li>
                <li className='option'>
                  <label className=''>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <label className=''>Option 1</label>
                </li>
                <li className='option'>
                  <label className=''>Option 2</label>
                </li>
                <li className='option'>
                  <label className='right'>Option 3</label>
                </li>
                <li className='option'>
                  <label className=''>Option 4</label>
                </li>
              </ul>
            </li>
            <li className='question'>
              <h2 className='qt'>This is the question ?</h2>
              <ul className='options'>
                <li className='option'>
                  <label className=''>Option 1</label>
                </li>
                <li className='option'>
                  <label className=''>Option 2</label>
                </li>
                <li className='option'>
                  <label className='wrong'>Option 3</label>
                </li>
                <li className='option'>
                  <label className=''>Option 4</label>
                </li>
              </ul>
            </li>
          </ol>
          <button className='btn btn-primary'>Try Again</button>
        </div>
      </div>
    </Layout>
  );
};
