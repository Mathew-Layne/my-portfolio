const Header = () => {
    let id = ''
    const handleAboutClick = () =>{
        console.log("About Me")
    }
    return (  
        <div className="container text-left h-[90vh] flex items-center">
            <div className="content">
                <p className="text-cyan-500 text font-bold text-2xl mb-2">Hello!</p>
                <p className="text-gray-100 text-8xl mb-2">I'm <span className="text-cyan-500">Mathew Layne</span>,
                Web Designer and Developer</p>

                <div className="">
                    <button className="bg-cyan-400 py-2 px-10 my-5 mr-5 font-semibold">Hire Me!</button>
                    <button onClick={handleAboutClick} className="text-gray-100 border-2 border-gray-100 py-2 px-10 my-5 font-semibold">About Me</button>
                </div>
            </div>
        </div>
    );
}
 
export default Header;