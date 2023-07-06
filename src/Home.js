import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import SocialIconRevamped from './SocialIconRevamped';
import ScrollDownButton from './ScrollDownButton';
import LoadingScreen from './LoadingScreen';
import Aboutme from './Aboutme'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulating loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div className='bg-slate-950 scroll-smooth'>
      {isLoading && <LoadingScreen isLoading={isLoading} />}

        <div className=" container mx-auto min-h-screen w-10/12 md:w-8/12">

      <Navbar />

      <Header />

      <SocialIconRevamped />

      <ScrollDownButton />

      <Aboutme />

    </div>
    </div>
    
  );
};

export default Home;
