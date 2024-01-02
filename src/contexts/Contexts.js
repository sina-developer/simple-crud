import React from 'react';
import { UserProvider } from './UserContext';
import { LoadingProvider } from './LoadingContext';

function Contexts({ children }) {
  return (
    <LoadingProvider>
      <UserProvider>{children}</UserProvider>
    </LoadingProvider>
  );
}

export default Contexts;
