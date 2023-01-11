// Login Page
import { useState } from 'react'; 
import { Link } from "react-router-dom";

function Login(){
    const [ formData, setFormData ] = useState({ 
        email : "", 
        password : ""
    })

    function handleChange(e){
        e.preventDefault(); 
        setFormData({...formData, [e.target.name] : e.target.value })
    }

    function handleSubmit(e){
        e.preventDefault(); 
        console.log(formData); 
    }

    return(
        <> 
                  <Link to="/home">Home</Link>


            <form onSubmit={handleSubmit} className="flex flex-col gap-2 ">
                <label>
                    Email 
                    <input type="text" value={formData.email} onChange={handleChange} placeholder="enter your email address"/>
                </label>

                <label>
                    Password
                    <input type="password" value={formData.password} onChange={handleChange} />
                </label>

                <button> Log In </button>
                <Link to="/signup"> Don't have an Account ? Sign Up Here</Link>
            </form>
        </>
    )
}


export default Login
