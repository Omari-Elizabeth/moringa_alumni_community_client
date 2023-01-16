// Login Page
import { useState } from 'react'; 
import Logo from "../img/formlogo.png"
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
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3  rounded-3xl border-solid border-white border-2  w-2/4 m-auto  bg-cloud-burst-600 mt-20  ">
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
                        placeholder="Enter your username"/> 
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

                 <div>
                    <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>{errorMessage}</h3>
                 </div>
            </form>
                { user ? <Redirect to="/alum_home" /> : <Redirect to="/login" /> }
        </div>
    )
}


export default Login
