const Navbar = () => {
    return ( 
        <nav className="navbar flex justify-between text-gray-100 text-lg font-bold">
            <h1 className="py-5 "> My Portfolio</h1>
            <div className="navlinks py-5">
                <a className="mx-5" href="">Home</a>
                <a className="mx-5" href="">About Me</a>
                <a className="mx-5" href="">Resume</a>
                <a className="mx-5" href="">Projects</a>
                <a className="ml-5" href="">Contact Me</a>
            </div>
        </nav>
     );
}
 
export default Navbar;