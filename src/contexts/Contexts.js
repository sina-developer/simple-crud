import React from 'react';
import { UserProvider } from './UserContext';

function Contexts({ children }) {
  return <UserProvider>{children}</UserProvider>;
}

export default Contexts;
