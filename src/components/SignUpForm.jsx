export const SignUpForm = () => {
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
          autoComplete='off'
          required
        />
      </label>
      <label htmlFor='nickname' className='auth-label'>
        Nickname<span className='imp-mark'>*</span>
        <br />
        <input
          type='text'
          id='nickname'
          className='auth-input'
          placeholder='example: @johndoe'
          autoComplete='off'
          required
        />
      </label>
      <label htmlFor='email' className='auth-label'>
        Email<span className='imp-mark'>*</span>
        <br />
        <input
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
          type='password'
          id='password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          required
        />
      </label>
      <label htmlFor='conf-password' className='auth-label'>
        Confirm Password<span className='imp-mark'>*</span>
        <br />
        <input
          type='password'
          id='conf-password'
          className='auth-input'
          placeholder='Password'
          autoComplete='off'
          required
        />
      </label>
      <button className='btn btn-primary' type='submit'>
        SignUp
      </button>
    </form>
  );
};
