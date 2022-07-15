import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export const RequireAuth = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  return user ? (
    children
  ) : (
    <Navigate to={'/auth/signin'} state={{ from: location }} />
  );
};
