import cn from 'classnames';
import React, { useContext, useEffect, useState } from 'react';
import LoginApi from '../apis/loginApi';
import { UserContext } from '../../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { useLoading } from '../../contexts/LoadingContext';

function Login(props) {
  let [username, setUsername] = useState('');
  let [username_has_error, setUsernameHasError] = useState(false);
  let [password, setPassword] = useState('');
  let [password_has_error, setPasswordHasError] = useState(false);

  let { user, loginUser } = useContext(UserContext);
  let { startLoading, stopLoading } = useLoading();

  let navigate = useNavigate();

  useEffect(() => {
    setUsernameHasError(false);
    setPasswordHasError(false);
  }, [username, password]);

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  const login = () => {
    if (!validate()) return;
    startLoading();
    new LoginApi(
      { username, password },
      (response) => {
        stopLoading();
        const data = response.data;
        // This part should be handling on back-end, but since i'm using mock api, checking this way
        if (username == data.username && password == data.password) {
          loginUser(data);
        } else {
          setUsernameHasError('Invalid username or password');
          setPasswordHasError(' ');
        }
      },
      (error) => {
        stopLoading();
      }
    ).run();
  };

  const validate = () => {
    let errors = 0;
    if (!username.length) {
      setUsernameHasError('Please enter your username');
      errors++;
    }
    if (password.length < 8) {
      setPasswordHasError('Password must be at least 8 characters');
      errors++;
    }
    return !errors;
  };

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300'>
      <div className='flex flex-col bg-white shadow-md px-4 sm:px-6 md:px-8 lg:px-10 py-8 rounded-md w-full max-w-md'>
        <div className='font-medium self-center text-xl sm:text-2xl uppercase text-gray-800'>
          Login To Your Account
        </div>
        <div className='mt-10'>
          <form action='#'>
            <div className='flex flex-col mb-6'>
              <label
                for='email'
                className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
              >
                E-Mail Address:
              </label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
                  </svg>
                </div>

                <input
                  id='username'
                  type='text'
                  name='username'
                  className={cn(
                    'text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border  w-full py-2 focus:outline-none focus:border-blue-400',
                    username_has_error.length
                      ? 'border-red-400'
                      : 'border-gray-400'
                  )}
                  placeholder='Username'
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <p className='text-red-600 text-xs sm:text-sm mt-1'>
                {username_has_error}
              </p>
            </div>
            <div className='flex flex-col mb-6'>
              <label
                for='password'
                className='mb-1 text-xs sm:text-sm tracking-wide text-gray-600'
              >
                Password:
              </label>
              <div className='relative'>
                <div className='inline-flex items-center justify-center absolute left-0 top-0 h-full w-10 text-gray-400'>
                  <span>
                    <svg
                      className='h-6 w-6'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                    >
                      <path d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                    </svg>
                  </span>
                </div>

                <input
                  id='password'
                  type='password'
                  name='password'
                  className={cn(
                    'text-sm sm:text-base placeholder-gray-500 pl-10 pr-4 rounded-lg border  w-full py-2 focus:outline-none focus:border-blue-400',
                    password_has_error.length
                      ? 'border-red-400'
                      : 'border-gray-400'
                  )}
                  placeholder='Password'
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <p className='text-red-600 text-xs sm:text-sm mt-1'>
                {password_has_error}
              </p>
            </div>

            <div className='flex w-full'>
              <button
                type='button'
                className='flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-blue-600 hover:bg-blue-700 rounded py-2 w-full transition duration-150 ease-in'
                onClick={login}
              >
                <span className='mr-2 uppercase'>Login</span>
                <span>
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path d='M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z' />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
