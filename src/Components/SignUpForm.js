//  Sign Up Form 
import { useState } from "react";
import { Link, Redirect } from 'react-router-dom';

function SignUp( { user , updateUser }){
   
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

    const [ errorMessage, setErrorMessage ] = useState(""); 
    const [ hideError, setHideError ] = useState(true)
  
    function handleSubmit(e){
        e.preventDefault()
 
        fetch('/users', {
            method : "POST", 
            headers : { "Content-Type" : "application/json" }, 
            body : JSON.stringify({ username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(d => {
                    console.log(d, "<= everything returned from the server")

                    // This will save the token in localStorage to be used in an Authentication Header in future requests.
                    localStorage.setItem("login_token", d.token); 
                    localStorage.setItem("user_id", d.user.id)

                    updateUser(d.user); 

                    return <Redirect to="/alum_home"/>
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
        })
    }

    return(
        <section className="min-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
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

                <input type="submit" className='rounded text-red-500 hover:text-slate-200'/>

            </form>

            <div className="flex justify-center gap-5">
                <h3> Have an Account? <Link to='/login' className="text-red-500"> Log In </Link> </h3>
                <h3> <Link to='/home'>Return To Home</Link> </h3>
            </div>

            <div>
                <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>{errorMessage}</h3>
            </div>

            { user ? <Redirect to="/alum_home" /> : <Redirect to="/signup" /> }
        </section>
    )
}

export default SignUp;