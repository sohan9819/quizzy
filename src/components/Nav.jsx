import { FiMenu, FiUser } from 'react-icons/fi';
import { GiBurningBook } from 'react-icons/gi';
import { Link } from 'react-router-dom';
import { ThemeToggler } from './all';
import { useAuthContext } from '../context/AuthContext';

export const Nav = () => {
  const { user, logOut } = useAuthContext();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className='navbar'>
      <Link to='/' className='title'>
        <GiBurningBook className='logo' />
        <h1>Quizzy</h1>
      </Link>
      <input type='checkbox' id='nav-toggler' />
      <label htmlFor='nav-toggler' className='nav-toggler'>
        <FiMenu />
      </label>
      <div className='menu'>
        <ul className='list'>
          <li>
            <Link to={'/profile'}>
              <FiUser className='user-icon' />
            </Link>
          </li>
          <li>
            <ThemeToggler />
          </li>
          <li>
            {user ? (
              <button className='btn btn-secondary' onClick={handleLogout}>
                Logout
              </button>
            ) : (
              <Link to={'/auth/signin'} className='btn btn-primary'>
                Login
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};
