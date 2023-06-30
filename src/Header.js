const Header = () => {
  let id = "";
  const handleAboutClick = () => {
    console.log("About Me");
  };
  return (
    <div className="container text-left h-[90vh] flex items-center">
      <div className="w-full md:w-8/12">
        <p className="text-teal-400 text-2xl mb-2">Hello!</p>
        <p className="text-gray-100 text-5xl md:text-7xl mb-2 font-semibold">
          I'm <span className="text-teal-400">Mathew Layne</span>.
        </p>
        <p className="text-gray-400 text-5xl md:text-7xl mb-2 font-semibold">
          Web Designer and Developer.
        </p>

        <div className="w-full md:w-7/12 my-5">
          <p className="text-gray-400">
            With a keen eye for aesthetics and a commitment to excellence, I
            strive to deliver visually striking websites and applications that
            engage and inspire.
          </p>
        </div>

        <div className="flex flex-wrap">
          <button className="bg-teal-400 py-2 px-10 my-2 mr-2 font-semibold">
            Hire Me!
          </button>
          <button
            onClick={handleAboutClick}
            className="text-gray-100 border-2 border-gray-100 py-2 px-10 my-2"
          >
            About Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
