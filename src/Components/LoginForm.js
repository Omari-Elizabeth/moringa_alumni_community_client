// Login Page
import { useState } from 'react'; 
import { Link } from "react-router-dom";
import Logo from "../img/formlogo.png"

function Login(){
   
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

  
    function handleSubmit(e){
        e.preventDefault()

        console.log(username, password); 
    }

    return(
        <div className='p-3'> 
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3 border-solid border-white border-2  w-2/4 m-auto  bg-cloud-burst-600 mt-2 ">
            <div className="m-auto mt-3">
                <img src={Logo} alt="logo" className="border rounded-xl mt-3" width={100} height={100} />
            </div>
                
                <h1 className="text-xl  text-international-orange-600 font-bold">LOG IN</h1>
            <label className="text-white text-lg">
                    Username 
                <input type="text" 
                    className="text-black p-2 m-2 border rounded-3xl w-6/12" 
                    value={username} 
                    onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        placeholder="Pick a username"/> 
                </label>

                <label className="text-white text-lg">
                    Password 
                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-3xl w-6/12" 
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter Password(min 4characters)"/>
                </label>

                <input type="submit" className='rounded text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border rounded-3xl m-auto' />

                <div className='flex justify-center gap-5'>
                    <h3>Don't have an Account ? <Link to="/signup" className='text-international-orange-600'> Sign Up Here</Link></h3>
                    <h3> <Link to='/home'>Return To<span className='text-international-orange-600 font-bold'> Home</span> </Link> </h3>
                </div>
            </form>
        </div>
    )
}


export default Login
