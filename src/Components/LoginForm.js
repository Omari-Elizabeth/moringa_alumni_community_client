// Login Page
import { useState } from 'react'; 
import { Link, Redirect } from "react-router-dom";

function Login( { user, updateUser }){
   
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 
    const [ errorMessage, setErrorMessage ] = useState(""); 
    const [ hideError, setHideError ] = useState(true)
  
    function handleSubmit(e){
        e.preventDefault()

        fetch("/login-user", {
            method : "POST", 
            headers : {  "Content-Type" : "application/json" },
            body : JSON.stringify( { username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(d => {
                    console.log(d)

                    // Create a Login Token 
                    localStorage.setItem("login_token", d.token);

                    // Store user_id in LocalStorage 
                    localStorage.setItem("user_id", d.user.id)

                    updateUser(d.user); 

                });
            } else {
                r.json().then((e) => {
                    setHideError(false);
                    setErrorMessage(e.error);

                    // setHideError(true);
                    // setErrorMessage("");
                })
            } 
        })
    }


    return(
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
                        placeholder="Enter your username"/> 
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

                <input type="submit" className='rounded text-red-500 hover:text-slate-200'/>

                <div className='flex justify-center gap-5'>
                    <h3>Don't have an Account ? <Link to="/signup" className='text-red-400'> Sign Up Here</Link></h3>
                    <h3> <Link to='/home'>Return To Home</Link> </h3>
                    <h3 className='text-red-400'><Link to="/admin_login">Adminstrator Access</Link></h3>
                </div>

                 <div>
                    <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>{errorMessage}</h3>
                 </div>
            </form>
                { user ? <Redirect to="/alum_home" /> : <Redirect to="/login" /> }
        </div>
    )
}


export default Login
