import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthContext } from '../context/AuthContext';

export const RequireNoAuth = ({ children }) => {
  const { user } = useAuthContext();
  const location = useLocation();

  return user ? <Navigate to={'/home'} state={{ from: location }} /> : children;
};
