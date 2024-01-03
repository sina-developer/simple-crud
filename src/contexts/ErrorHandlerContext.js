import React, { createContext, useContext, useState } from 'react';

const ErrorHandlerContext = createContext();

const ErrorHandlerProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [path, setPath] = useState();

  const handleError = (errorMessage, _path = null) => {
    setError(errorMessage);
    setPath(_path);
  };

  const clearError = () => {
    setError(null);
  };

  return (
    <ErrorHandlerContext.Provider
      value={{ path, error, handleError, clearError }}
    >
      {children}
    </ErrorHandlerContext.Provider>
  );
};

const useErrorHandler = () => {
  const context = useContext(ErrorHandlerContext);
  if (!context) {
    throw new Error(
      'useErrorHandler must be used within an ErrorHandlerProvider'
    );
  }
  return context;
};

export { ErrorHandlerProvider, useErrorHandler };
