import { Link } from 'react-router-dom';
import { Layout } from '../layout/layout';
import { SignUpForm } from '../components/SignUpForm';

export const SignUp = () => {
  return (
    <Layout>
      <div class='container auth'>
        <article class='auth-card'>
          <h2 class='logo'>Quizzy</h2>
          <p class='message'>
            Welcome , <br />
            sign up to join 😉
          </p>
          <SignUpForm />
          <small>
            Already have an account ?{' '}
            <b>
              <Link to='/auth/signin'>SignIn</Link>
            </b>
          </small>
        </article>
      </div>
    </Layout>
  );
};
