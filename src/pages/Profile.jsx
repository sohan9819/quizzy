import { Layout } from '../layout/layout';
import { FiEdit2 } from 'react-icons/fi';

export const Profile = () => {
  return (
    <Layout>
      <div class='container profile'>
        <article class='profile-card edit'>
          <div className='profile-header'>
            <h2 class='logo'>Profile</h2>
            <div className='edit-profile-btn'>
              <button className='btn btn-primary'>
                <FiEdit2 />
              </button>
            </div>
          </div>
          <form className='form'>
            <label htmlFor='username' className='profile-label'>
              Username<span className='imp-mark'>*</span>
              <br />
              <input
                type='text'
                id='username'
                className='profile-input'
                placeholder='Username'
                autoComplete='off'
                value='Sohan Shetty'
                readOnly
                required
              />
            </label>
            <label htmlFor='email' className='profile-label'>
              Email<span className='imp-mark'>*</span>
              <br />
              <input
                type='email'
                id='email'
                className='profile-input'
                placeholder='Email Address'
                autoComplete='off'
                value={'sohanshetty2001@gmail.com'}
                required
              />
            </label>
            {/* <label htmlFor='password' className='profile-label'>
              Password<span className='imp-mark'>*</span>
              <br />
              <input
                type='password'
                id='password'
                className='profile-input'
                placeholder='Password'
                autoComplete='off'
                required
              />
            </label> */}
            <button className='btn btn-primary' type='submit'>
              Save changes
            </button>
          </form>
        </article>
      </div>
    </Layout>
  );
};
