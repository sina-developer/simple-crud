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
  const [has_checked, setHasChecked] = useState(false);

  useEffect(() => {
    initUser();
  }, []);
  const initUser = () => {
    const _user = getFromLocalStorage('user');
    setUser(_user);
    setHasChecked(true);
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
    <UserContext.Provider
      value={{ has_checked, user, initUser, loginUser, logoutUser }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
