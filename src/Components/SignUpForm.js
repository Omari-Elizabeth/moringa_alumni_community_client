//  Sign Up Form 
import { useState } from "react";
import { Link } from 'react-router-dom';

function SignUp(){
   
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

  
    function handleSubmit(e){
        e.preventDefault()

        console.log(username, password); 
    }

    return(
        <section className="min-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 text-black">
                <label>
                    Username 
                <input type="text" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={username} 
                    onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        placeholder="Pick a username"/> 
                </label>

                <label>
                    Password 
                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter Password (minimum 4 characters)"/>
                </label>

                <input type="submit" className='rounded text-slate-500 hover:text-blue-700'/>

            </form>

            <div className="flex justify-center gap-5">
                <h3> Have an Account? <Link to='/login'> Log In </Link> </h3>
                <h3> <Link to='/home'>Return To Home</Link> </h3>
            </div>
        </section>
    )
}

export default SignUp;