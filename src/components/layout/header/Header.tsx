import { useState, FC } from 'react';
import { MenuIcon, MoonIcon, SunIcon } from '@assets/icons';
import { HeaderProps } from './types';

const Header: FC<HeaderProps> = ({ handleIsSidebarOpen }) => {
  const twTheme = localStorage.getItem('twTheme');
  const [mode, setMode] = useState(twTheme || 'light');
  const htmlElement = document.querySelector('html')!;

  const toggleDark = () => {
    if (localStorage.getItem('twTheme') === 'dark') {
      htmlElement.classList.remove('dark');
      localStorage.setItem('twTheme', 'light');
      setMode('light');
    } else {
      htmlElement.classList.add('dark');
      localStorage.setItem('twTheme', 'dark');
      setMode('dark');
    }
  };

  return (
    <header
      className="z-40 py-2 lg:p-4 lg:shadow-sm shadow-sm shadow-bottom
		 bg-white dark:bg-gray-800"
    >
      <div
        className="container flex items-center justify-between h-full 
			px-6 mx-auto text-purple-600 dark:text-purple-300"
      >
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
        >
          <MenuIcon
            onClick={() => handleIsSidebarOpen(true)}
            className="w-6 h-6"
            aria-hidden="true"
          />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus-within:text-purple-500">
            &nbsp;
          </div>
        </div>
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <li className="relative">
            <button
              onClick={toggleDark}
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              {mode === 'light' ? (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              )}

              {/* <!-- Notification badge --> */}
              <span
                aria-hidden="true"
                className="animate-ping absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
