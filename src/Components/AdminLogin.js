// Admin  Login Page
import { useState } from 'react'; 
import { Link } from "react-router-dom";

function AdminLogin(){
     
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

    const admin_token = localStorage.getItem("jwt");
  
    function handleSubmit(e){
        e.preventDefault()

        console.log(username, password); 

        fetch('/login',{
            method : 'POST', 
            headers : {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${admin_token}`
            },
            body : JSON.stringify({ username, password })
        })
    }
    return (
            <div className='p-3'> 
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3 ">
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

                <div className='flex justify-center gap-5'>
                    <h3> <Link to='/home'>Return To Home</Link> </h3>
                </div>
            </form>
        </div>
    )
}


export default AdminLogin