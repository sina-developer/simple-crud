import React, { createContext, useEffect, useState } from 'react';
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  saveToLocalStorage,
} from '../utils/localStorage';

// Create the context
const UserContext = createContext();

// Create a context provider component
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const initUser = () => {
    const _user = getFromLocalStorage('user');
    setUser(_user);
    return _user;
  };
  const loginUser = (userData) => {
    setUser(userData);
    saveToLocalStorage('user', userData);
  };

  const logoutUser = () => {
    setUser(null);
    removeFromLocalStorage('user');
  };

  return (
    <UserContext.Provider value={{ user, initUser, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
