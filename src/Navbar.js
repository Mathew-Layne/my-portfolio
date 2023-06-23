const Navbar = () => {
    return ( 
        <nav className="navbar flex justify-between text-gray-100 text-sm">
            <h1 className="pt-10 text-lg"> My Portfolio</h1>
            <div className="navlinks py-10">
                <a className="mx-5 hover:text-teal-400" href="">Home</a>
                <a className="mx-5 hover:text-teal-400" href="">About Me</a>
                <a className="mx-5 hover:text-teal-400" href="">Resume</a>
                <a className="mx-5 hover:text-teal-400" href="">Projects</a>
                <a className="ml-5 hover:text-teal-400" href="">Contact Me</a>
            </div>
        </nav>
     );
}
 
export default Navbar;