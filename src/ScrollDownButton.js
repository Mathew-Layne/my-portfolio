import React from 'react';
import { Transition } from '@headlessui/react';

const ScrollDownButton = () => {
  const [isVisible, setIsVisible] = React.useState(true);
  const timeoutRef = React.useRef(null);

  const handleScroll = () => {
    setIsVisible(false);
    // Scroll to the next section
    // Add your own logic here
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleScrollEvent = () => {
      
    // Clear any existing timeout
    clearTimeout(timeoutRef.current);

    if(window.scrollY > 100){
    
      setIsVisible(false);
      }
    else{
    
      setIsVisible(true);
     }


    // Set a delay before updating visibility

  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent);

    return () => {
      window.removeEventListener('scroll', handleScrollEvent);
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Transition
      show={isVisible}
      enter="transition-transform duration-500"
      enterFrom="scale-0"
      enterTo="scale-100"
      leave="transition-transform duration-500"
      leaveFrom="scale-100"
      leaveTo="scale-0"
    >
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
        <button
          className="bg-white rounded-full p-2 shadow-lg animate-bounce"
          onClick={handleScroll}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </Transition>
  );
};

export default ScrollDownButton;