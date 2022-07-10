import { Link } from 'react-router-dom';
import { SignInForm } from '../components/all';
import { Layout } from '../layout/layout';

export const SignIn = () => {
  return (
    <Layout>
      <div class='container auth'>
        <article class='auth-card'>
          <h2 class='logo'>Quizzy</h2>
          <p class='message'>
            Welcome back , <br />
            sign in to continue to 😉
          </p>
          <SignInForm />
          <small>
            Don't have an account ?{' '}
            <b>
              <Link to='/auth/signup'>SignUp</Link>
            </b>
          </small>
        </article>
      </div>
    </Layout>
  );
};
