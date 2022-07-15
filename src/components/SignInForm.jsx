import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';

export const SignInForm = () => {
  const [error, setError] = useState('');
  const { signIn, googleSignIn } = useAuthContext();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      await signIn(email, password);
      navigate('/profile');
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIN = () => {
    googleSignIn();
  };

  return (
    <>
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
            className='auth-input'
            placeholder='Password'
            required
          />
        </label>
        <div className='auth-reset'>
          <Link to='/auth/forgot-password'>Forgot Password ?</Link>
        </div>
        <button className='btn btn-primary' type='submit'>
          SignIn
        </button>

        {/* <button className='btn btn-primary'>Guest Login</button> */}
      </form>
      <hr className='auth-hr' />
      <div className='social-auth'>
        <button className='auth-social-buttons' onClick={handleGoogleSignIN}>
          <FcGoogle />
        </button>
        <button className='auth-social-buttons'>
          <FaGithub />
        </button>
      </div>
    </>
  );
};
