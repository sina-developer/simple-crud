import React from 'react';
import Home from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';

function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
