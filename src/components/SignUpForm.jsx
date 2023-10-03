import { useRef, useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const SignUpForm = () => {
  const [error, setError] = useState('');
  const { signUp } = useAuthContext();

  const navigate = useNavigate();

  const password = useRef();
  const confirm_password = useRef();

  const validatePassword = () => {
    if (
      PWD_REGEX.test(password.current.value) ||
      password.current.value === ''
    ) {
      password.current.setCustomValidity('');
    } else {
      password.current.setCustomValidity(
        '8 to 24 characters.\nMust include uppercase and lowercase letters, a number and a special character.\nAllowed special characters: ! @ # $ %'
      );
    }

    if (password.current.value !== confirm_password.current.value) {
      confirm_password.current.setCustomValidity("Passwords Don't Match");
    } else {
      confirm_password.current.setCustomValidity('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signUp(email, password);
      navigate('/profile');
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
      <label htmlFor='password' className='auth-label'>
        Password<span className='imp-mark'>*</span>
        <br />
        <input
          name='password'
          type='password'
          id='password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          required
          ref={password}
          onChange={validatePassword}
        />
      </label>
      <label htmlFor='conf-password' className='auth-label'>
        Confirm Password<span className='imp-mark'>*</span>
        <br />
        <input
          name='confpassword'
          type='password'
          id='conf-password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          required
          ref={confirm_password}
          onKeyUp={validatePassword}
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        SignUp
      </button>
    </form>
  );
};
