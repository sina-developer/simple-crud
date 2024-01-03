import React, { useContext, useEffect } from 'react';
import Home from './home/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './login/login';
import { UserContext } from '../contexts/UserContext';
import GaurdedRoute from '../components/GaurdedRoute';
import NewProduct from './new_product/new_product';
import ShowProduct from './show_product/show_product';

function AppRoutes(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/new_product'
          element={
            // <GaurdedRoute>
            <NewProduct />
            // </GaurdedRoute>
          }
        />
        <Route
          path='/:id'
          element={
            // <GaurdedRoute>
            <ShowProduct />
            // </GaurdedRoute>
          }
        />
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
