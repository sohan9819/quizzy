import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const PasswordResetForm = () => {
  const navigate = useNavigate();
  const { resetPassword } = useAuthContext();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    try {
      await resetPassword(email);
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <form
      className='form'
      onSubmit={handleSubmit}
      onChange={() => setError('')}
    >
      {error && <p className='auth-error'>{error}</p>}
      <label htmlFor='email' className='auth-label'>
        Email<span className='imp-mark'>*</span>
        <br />
        <input
          name='email'
          type='email'
          id='email'
          className='auth-input'
          placeholder='Email Address'
          autoComplete='off'
          required
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        Reset
      </button>

      {/* <button className='btn btn-primary'>Guest Login</button> */}
    </form>
  );
};
