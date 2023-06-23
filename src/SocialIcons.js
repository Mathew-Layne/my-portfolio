import React from 'react';

const SocialIcons = () => {
  const [activeIcon, setActiveIcon] = React.useState('');

  const handleIconHover = (icon) => {
    setActiveIcon(icon);
  };

  return (
    <div className="fixed bg-red-500 top-1/2 right-4 transform -translate-y-1/2">
      <div className="flex flex-col space-y-4 relative">
        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeIcon === 'gmail' ? 'text-blue-500' : 'text-gray-100'
          }`}
          onMouseEnter={() => handleIconHover('gmail')}
          onMouseLeave={() => handleIconHover('')}
        >
           {<span className="text-sm absolute bg-red-500">Gmail</span>}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15l9 6H3l9-6zm0 0v-3"
            />
          </svg>
         
        </div>

        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeIcon === 'facebook' ? 'text-blue-500' : 'text-gray-100'
          }`}
          onMouseEnter={() => handleIconHover('facebook')}
          onMouseLeave={() => handleIconHover('')}
        >
          {activeIcon === 'facebook' && (
            <span className="text-sm">Facebook</span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 3h4v18h-4zm2-2a9 9 0 110 18 9 9 0 010-18z"
            />
          </svg>
          
        </div>

        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeIcon === 'instagram' ? 'text-blue-500' : 'text-gray-100'
          }`}
          onMouseEnter={() => handleIconHover('instagram')}
          onMouseLeave={() => handleIconHover('')}
        >
          {activeIcon === 'instagram' && (
            <span className="text-sm">Instagram</span>
          )}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14.16 3H9.84A5.001 5.001 0 005 8.84V15a5.001 5.001 0 004.84 4.99H14.1a5.001 5.001 0 004.99-4.84V9.83A5.001 5.001 0 0014.16 3zm-4.32 2C9.562 5 9 5.563 9 6.24v4.52C9 11.437 9.563 12 10.24 12h3.52C14.438 12 15 11.437 15 10.76V6.24C15 5.563 14.437 5 13.76 5h-4.92zM12 10a2 2 0 110-4 2 2 0 010 4z"
            />
          </svg>
          
        </div>

        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeIcon === 'linkedin' ? 'text-blue-500' : 'text-gray-100'
          }`}
          onMouseEnter={() => handleIconHover('linkedin')}
          onMouseLeave={() => handleIconHover('')}
        >
          {activeIcon === 'linkedin' && (
            <span className="text-sm">LinkedIn</span>
          )} <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 20v-2.5A2.5 2.5 0 0017.5 15H6.5A2.5 2.5 0 004 17.5V20m16-9.5v-3A2.5 2.5 0 0017.5 5h-15A2.5 2.5 0 000 7.5v10A2.5 2.5 0 002.5 20H4"
            />
          </svg>
          
        </div>

        <div
          className={`flex items-center space-x-2 cursor-pointer ${
            activeIcon === 'phone' ? 'text-blue-500' : 'text-gray-100'
          }`}
          onMouseEnter={() => handleIconHover('phone')}
          onMouseLeave={() => handleIconHover('')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8v4m0 0v4m0-4h4m-4 0H8a4 4 0 01-4-4V8a4 4 0 014-4h8a4 4 0 014 4v8a4 4 0 01-4 4h-4a4 4 0 01-4-4"
            />
          </svg>
          {activeIcon === 'phone' && <span className="text-sm">Phone</span>}
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;