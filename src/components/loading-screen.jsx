import React, { useContext } from 'react';
import { useLoading } from '../contexts/LoadingContext';

function LoadingScreen() {
  let { loading } = useLoading();
  return (
    loading && (
      <div data-testid="loading" className='absolute bg-white top-0 w-full h-full flex items-center justify-center min-h-screen bg-opacity-50  z-10'>
        <div
          style={{ borderTopColor: 'transparent' }}
          className='w-8 h-8 border-4 border-blue-200 rounded-full animate-spin'
        ></div>
        <p className='ml-2'>Loading...</p>
      </div>
    )
  );
}

export default LoadingScreen;
