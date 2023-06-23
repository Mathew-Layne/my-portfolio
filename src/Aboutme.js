import { useState } from "react";

const Aboutme = () => {

    const [name, setName] = useState('Mike')

    const handleClick = () => {
        setName('Mathew')
    }

    return ( 
        <div className="container">
            <div className="content h-screen"> 
                <p className="text-gray-100">My name is {name}</p>
                <button onClick={handleClick} className="bg-indigo-600 text-gray-100"> About Me</button>
            </div>
        </div>
     );
}
 
export default Aboutme;