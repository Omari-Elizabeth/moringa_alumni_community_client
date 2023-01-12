// Admin  Login Page
import { useState } from 'react'; 
import { Link  } from "react-router-dom";
import { redirect } from "react-router"; 

function AdminLogin( { admin , updateAdmin }){
     
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

    const [ errorMessage, setErrorMessage ] = useState(""); 
    const [ hideError, setHideError ] = useState(true)
  
  
    function handleSubmit(e){
        e.preventDefault()

        fetch('/login',{
            method : 'POST', 
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({ username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(d => {
                    localStorage.setItem("admin_token", d.admin_token); 
                    updateAdmin(d.admin);
                    redirect("/alumhome");
                })
            } else { 
                r.json().then(e => {
                    setTimeout(() => {
                        console.log(e.error) 
                        setHideError(false);
                        setErrorMessage(e.error);
                    },500);
                    setHideError(true);
                    setErrorMessage("");
                })
            }
        } )
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

                <div>
                    <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>{errorMessage}</h3>
                 </div>

            </form>
        </div>
    )
}


export default AdminLogin