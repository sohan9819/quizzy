import { Layout } from 'layout/layout';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const Rules = () => {
  return (
    <Layout>
      <div className='container rules'>
        <h1 className='rules-title'>Rules</h1>
        <ul className='rules-list-container'>
          <li>There will be total 5 questions</li>
          <li>
            You are given 4 options for each question, choose 1 option from
            given options.
          </li>
          <li> For each correct answer you will get points</li>
          <li>
            Points for each question and total points will depend on the
            difficulty you will select{' '}
            <ul className='rules-mark-list'>
              <li className='mark-list'>
                For 'Easy' you will get 1 point for each question and total
                points will be 10.
              </li>
              <li className='mark-list'>
                For 'Medium' you will get 2 point for each question and total
                points will be 20.
              </li>
              <li className='mark-list'>
                For 'Hard' you will get 3 point for each question and total
                points will be 30.
              </li>
            </ul>
          </li>
          <li> No marks will be deducted for wrong answers.</li>
          <li>
            For passing the quiz you have to give at-least answer 4 questions
            correctly
          </li>
          <li> You cannot skip any question</li>
        </ul>
        <Link to={'/home'} className='btn btn-primary back-btn'>
          <FiArrowLeft /> back to Home
        </Link>
      </div>
    </Layout>
  );
};
