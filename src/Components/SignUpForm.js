//  Sign Up Form 
import { useState } from "react";
import { Link } from 'react-router-dom';
import Logo from "../img/formlogo.png"

function SignUp(){
   
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 
  
    function handleSubmit(e){
        e.preventDefault()

        console.log(username, password); 
    }

    return(
        <section className="min-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 border-solid border-white border-2 w-2/4 m-auto bg-cloud-burst-600 mt-2">

            <div className="m-auto ">
                <img src={Logo} alt="logo" className="border rounded-xl mt-3" width={100} height={100} />
                </div>
                
                <h1 className="text-xl  text-international-orange-600 font-bold" >SIGN UP</h1>
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
                        placeholder="Enter Password (minimum 4 characters)"/>
                </label>

                <input type="submit" className='rounded text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border rounded-3xl m-auto' />
                
                <div className="flex justify-center gap-5">
                <h3> Have an Account? <Link to='/login' className="text-international-orange-600"> Log In </Link> </h3>
                <h3> <Link to='/home'>Return To <span className="text-international-orange-600 font-bold"> Home</span></Link> </h3>
            </div>

            </form>

          
        </section>
    )
}

export default SignUp;