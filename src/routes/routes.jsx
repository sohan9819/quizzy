import { Route, Routes } from 'react-router-dom';
import {
  Landing,
  Home,
  Profile,
  SignIn,
  SignUp,
  Game,
  Result,
  ForgotPassword,
  Rules,
} from '../pages/all';
import { RequireAuth } from './RequireAuth';
import { RequireNoAuth } from './RequireNoAuth';

export const RouterRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<Home />} />
      <Route path='/rules' element={<Rules />} />
      <Route
        path='/profile'
        element={
          <RequireAuth>
            <Profile />
          </RequireAuth>
        }
      />
      <Route
        path='/auth/signin'
        element={
          <RequireNoAuth>
            <SignIn />
          </RequireNoAuth>
        }
      />
      <Route
        path='/auth/signup'
        element={
          <RequireNoAuth>
            <SignUp />
          </RequireNoAuth>
        }
      />
      <Route path='/auth/forgot-password' element={<ForgotPassword />} />
      <Route
        path='/game'
        element={
          <RequireAuth>
            <Game />
          </RequireAuth>
        }
      />
      <Route
        path='/result'
        element={
          <RequireAuth>
            <Result />
          </RequireAuth>
        }
      />
    </Routes>
  );
};
