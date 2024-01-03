import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate, Route } from 'react-router-dom';
import Home from '../pages/home/home';

function GaurdedRoute({ children }) {
  let { user, has_checked } = useContext(UserContext);

  if (has_checked && !user) {
    return <Navigate to='/login' replace />;
  } else if (user) {
    return children;
  }
  return null;
}

export default GaurdedRoute;
