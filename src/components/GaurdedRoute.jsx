import React, { useContext, useEffect } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Navigate, Route } from 'react-router-dom';
import Home from '../pages/home/home';

function GaurdedRoute({ children }) {
  let { user, initUser } = useContext(UserContext);

  useEffect(() => {
    initUser();
  }, []);

  if (!user) {
    return <Navigate to='/login' replace />;
  }

  return children;
}

export default GaurdedRoute;
