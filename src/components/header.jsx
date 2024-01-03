import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';

function Header(props) {
  let { user, logoutUser } = useContext(UserContext);
  return (
    <header class='w-full mt-5 text-gray-700 bg-white shadow-sm body-font'>
      <div class='container flex flex-col items-start p-6 mx-auto md:flex-row'>
        <Link
          to={'/'}
          class='flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0'
        >
          Welcome {user.username}!
        </Link>
        <nav class='flex items-center justify-center text-base md:ml-auto'></nav>
        <div class='items-center h-full pl-6 ml-6 border-gray-200'>
          <p
            onClick={logoutUser}
            class='mr-5 cursor-pointer  text-red-400 font-medium hover:text-gray-900'
          >
            Logout
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
