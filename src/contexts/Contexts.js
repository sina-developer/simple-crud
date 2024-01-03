import React from 'react';
import { UserProvider } from './UserContext';
import { LoadingProvider } from './LoadingContext';
import { ErrorHandlerProvider } from './ErrorHandlerContext';

function Contexts({ children }) {
  return (
    <ErrorHandlerProvider>
      <LoadingProvider>
        <UserProvider>{children}</UserProvider>
      </LoadingProvider>
    </ErrorHandlerProvider>
  );
}

export default Contexts;
