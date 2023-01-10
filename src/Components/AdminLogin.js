// Admin  Login Page
import { useState } from 'react'; 

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
            <form onSubmit={handleSubmit}>
                <label>
                    Email 
                    <input type="text" value={formData.email} onChange={handleChange} />
                </label>

                <label>
                    Password
                    <input type="password" value={formData.password} onChange={handleChange} />
                </label>
            </form>
        </>
    )
}


export default Login