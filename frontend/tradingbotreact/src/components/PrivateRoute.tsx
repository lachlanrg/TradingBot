import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const PrivateRoute = ({ element, loggedIn }: { element: React.ReactNode; loggedIn: boolean; }) => {
  return loggedIn ? (
    <Route element={element} />
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
