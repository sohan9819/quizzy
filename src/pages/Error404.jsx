import { Layout } from 'layout/layout';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

export const Error404 = () => {
  return (
    <Layout>
      <div className='container error404'>
        <h3>Error 404 </h3>
        <h1>Page Not Found</h1>
        <p>🐰🐼🦝</p>
        <Link to={'/'} className='btn btn-primary back-btn'>
          <FiArrowLeft /> back
        </Link>
      </div>
    </Layout>
  );
};
