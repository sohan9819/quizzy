import { Nav } from '../components/all';

export const Layout = ({ children }) => {
  return (
    <>
      <div className='main'>
        <Nav />
        {children}
        <footer>
          <h2>@copyrights SnickerDev</h2>
        </footer>
      </div>
    </>
  );
};
