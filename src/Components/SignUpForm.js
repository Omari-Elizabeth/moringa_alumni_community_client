//  Sign Up Form 
import { useState } from "react";
import { Link } from 'react-router';

function SignUp(){
    const [ formData, setFormData ] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username : "", 
        password : ""
    })

    function handleChange(e){
        e.preventDefault(); 

        setFormData({...formData, [e.target.name] : e.target.value })

        console.log(formData);
    }


    function handleSubmit(e){
        e.preventDefault()

        console.log(formData, "<= submitted form data")
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name 
                        <input type="text"  value={formData.firstName} onChange={handleChange}/>
                </label>

                <label>
                    Last Name 
                    <input type="text" value={formData.lastName} onChange={handleChange} />
                </label>

                <label>
                    Email 
                    <input type="text" value={formData.email} onChange={handleChange} />
                </label>

                <label>
                    Username 
                        <input type="text" value={formData.username} onChange={handleChange} />
                </label>

                <label>
                    Password 
                        <input type="password" value={formData.password} onChange={handleChange} />
                </label>

                <input type="submit" />

            </form>
            <div>
                <h3> Have an Account? <Link to='/login'/> </h3>
            </div>
        </>
    )
}

export default SignUp;