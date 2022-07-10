import { FiPlay } from 'react-icons/fi';
import { GiBurningBook } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { Layout } from '../layout/layout';

export const Landing = () => {
  const navigate = useNavigate();
  return (
    <Layout>
      <div className='container landing'>
        <section className='intro'>
          <GiBurningBook className='logo' />
          <h1 className='title'>Quizzy</h1>
          <p className='subtitle'>A fun quizz game</p>
          <button
            className='cta'
            onClick={() => {
              navigate('/home');
            }}
          >
            Play Now
            <FiPlay className='cta-icon' />
          </button>
        </section>
      </div>
    </Layout>
  );
};
