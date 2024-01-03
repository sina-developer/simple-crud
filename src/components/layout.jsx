import React from 'react';
import Header from './header';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100'>
        {children}
      </div>
    </div>
  );
}

export default Layout;
