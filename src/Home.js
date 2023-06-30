import {useEffect, useState} from 'react';
import Navbar from './Navbar';
import Header from './Header';
import SocialIconRevamped from './SocialIconRevamped';
import ScrollDownButton from './ScrollDownButton';
import LoadingScreen from './LoadingScreen';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    return () => {
      console.log(isLoading);
      console.log("useEect Ran");

    //   setTimeout(() => {
    //     setIsLoading(false);
    //   }, 3000);
    };
  }, []);
  return (
    <div className='bg-slate-950'>
      {isLoading && <LoadingScreen />}

        <div className=" container mx-auto min-h-screen w-10/12 md:w-8/12">

      <Navbar />

      <Header />

      <SocialIconRevamped />

      <ScrollDownButton />

      {/* <Aboutme /> */}
    </div>
    </div>
    
  );
};

export default Home;
