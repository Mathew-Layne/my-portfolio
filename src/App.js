import Navbar from './Navbar';
import Header from './Header';
import Aboutme from './Aboutme';
import ScrollDownButton from './ScrollDownButton';
import SocialIconRevamped from './SocialIconRevamped';

function App() {
  return (
    <div className="App bg-slate-950">

      <div className="container mx-auto min-h-screen w-8/12">

        <Navbar />

        <Header />

        {/* <SocialIcons/> */}
        <SocialIconRevamped/>

        <ScrollDownButton/>

        <Aboutme />

      </div>
      

    </div>
  );
}

export default App;
