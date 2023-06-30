import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav className={`navbar ${hasScrolled ? 'shadow' : ''} flex justify-between text-gray-100 text-sm pt-6`}>
      <h1 className="pt-1 text-lg">My Portfolio</h1>
      <div className={`navlinks py-1 ${showMobileMenu ? 'block' : 'hidden'} sm:flex`}>
        <a className="block mt-1 sm:inline-block sm:mt-0 mx-2 sm:mx-4 hover:text-teal-400" href="#">Home</a>
        <a className="block mt-1 sm:inline-block sm:mt-0 mx-2 sm:mx-4 hover:text-teal-400" href="#">About Me</a>
        <a className="block mt-1 sm:inline-block sm:mt-0 mx-2 sm:mx-4 hover:text-teal-400" href="#">Resume</a>
        <a className="block mt-1 sm:inline-block sm:mt-0 mx-2 sm:mx-4 hover:text-teal-400" href="#">Projects</a>
        <a className="block mt-1 sm:inline-block sm:mt-0 ml-2 sm:ml-4 hover:text-teal-400" href="#">Contact Me</a>
      </div>
      <div className="block sm:hidden">
        <button
          className={`mobile-menu-toggle focus:outline-none ${showMobileMenu ? 'text-teal-400' : 'text-gray-100'}`}
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};

 
export default Navbar;