import React, { useContext } from 'react';
import Home from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import { UserContext } from '../contexts/UserContext';
import GaurdedRoute from '../components/GaurdedRoute';

function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <GaurdedRoute>
              <Home />
            </GaurdedRoute>
          }
        />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
