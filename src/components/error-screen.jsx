import React from 'react';
import { useErrorHandler } from '../contexts/ErrorHandlerContext';
import { useNavigate } from 'react-router-dom';

function ErrorScreen(props) {
  let { path, error, clearError } = useErrorHandler();
  return (
    error && (
      <div className='absolute bg-white top-0 w-full h-full flex flex-col space-y-6 items-center justify-center min-h-screen z-10'>
        <div className='flex items-center justify-center'>
          <img src={'/danger.svg'} />

          <p className='ml-2'>{error}</p>
        </div>
        <div>
          <button
            onClick={() => {
              if (path) {
                window.location.href = path;
              } else {
                clearError();
              }
            }}
            class='bg-blue-500 text-white font-bold py-2 px-4 rounded'
          >
            {path ? 'Go Back' : 'Close'}
          </button>
        </div>
      </div>
    )
  );
}

export default ErrorScreen;
