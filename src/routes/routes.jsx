import { Route, Routes } from 'react-router-dom';
import { Landing, Home, Auth, SignIn, SignUp } from '../pages/all';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/auth/signin' element={<SignIn />} />
      <Route path='/auth/signup' element={<SignUp />} />
    </Routes>
  );
};
