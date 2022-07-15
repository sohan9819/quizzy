import { Link } from 'react-router-dom';
import { PasswordResetForm } from '../components/all';
import { Layout } from '../layout/layout';

export const ForgotPassword = () => {
  return (
    <Layout>
      <div class='container auth'>
        <article class='auth-card'>
          <h2 class='logo'>Quizzy</h2>
          <p class='message'>Password Reset</p>
          <PasswordResetForm />
          <small>
            Want to have an account ?{' '}
            <b>
              <Link to='/auth/signup'>SignUp</Link>
            </b>
          </small>
        </article>
      </div>
    </Layout>
  );
};
