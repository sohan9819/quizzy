import React from 'react';

export const SignInForm = () => {
  return (
    <form className='form'>
      <label htmlFor='username' className='auth-label'>
        Username<span className='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='username'
          className='auth-input'
          placeholder='Username'
          required
        />
      </label>
      <label htmlFor='password' className='auth-label'>
        Password<span className='imp-mark'>*</span>
        <br />
        <input
          type='password'
          className='auth-input'
          placeholder='Password'
          required
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        SignIn
      </button>
      <button className='btn btn-primary'>Guest Login</button>
    </form>
  );
};
