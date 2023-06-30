import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className={`left-0 right-0 top-0 z-50  flex items-center justify-center fixed h-screen bg-slate-950 transition-opacity duration-1000 ease-in-out ${
      isLoading ? 'opacity-100' : 'opacity-0'
    }`}>
      <div className="flex items-center">
        <div className="rounded-full h-16 w-16 border-t-4 border-b-4 border-teal-400 animate-spin"></div>
        <div className="ml-3 text-teal-400 text-xl">Loading<span className="animate-pulse text-2xl">...</span></div>
      </div>
    </div>
  );
};

export default LoadingScreen;