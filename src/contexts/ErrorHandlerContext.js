import React, { createContext, useContext, useState } from 'react';

// Create the ErrorHandlerContext
const ErrorHandlerContext = createContext();

// Create the ErrorHandlerProvider
const ErrorHandlerProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [path, setPath] = useState();

  // Function to set an error
  const handleError = (errorMessage, _path = null) => {
    setError(errorMessage);
    setPath(_path);
  };

  // Function to clear the error
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

// Create a custom hook to use the ErrorHandlerContext
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
