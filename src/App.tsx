import './style/style.css';
import { FiMenu, FiMoon, FiSun } from 'react-icons/fi';

function App() {
  return (
    <>
      <div className='main'>
        <nav className='navbar'>
          <a href='#' className='logo'>
            <h1>Quizzy</h1>
          </a>
          <div className='menu'>
            <ul className='list'>
              <li>
                <a href='#'>Profile</a>
              </li>
              <li>
                <label htmlFor='toggler-checkbox' className='toggler'>
                  <input type='checkbox' id='checkbox' />
                  <span className='ball'></span>
                  <FiSun className='sun' />
                  <FiMoon className='moon' />
                </label>
              </li>
              <li>
                <button className='btn btn-primary'>Logout</button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='container landing'></div>
      </div>
    </>
  );
}

export default App;
