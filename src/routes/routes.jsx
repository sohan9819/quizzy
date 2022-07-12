import { Route, Routes } from 'react-router-dom';
import {
  Landing,
  Home,
  Profile,
  SignIn,
  SignUp,
  Game,
  Result,
} from '../pages/all';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/auth/signin' element={<SignIn />} />
      <Route path='/auth/signup' element={<SignUp />} />
      <Route path='/game' element={<Game />} />
      <Route path='/result' element={<Result />} />
    </Routes>
  );
};
