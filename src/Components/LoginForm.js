// Login Page
import { useState } from 'react'; 

function Login(){
    const [ formData, setFormData ] = useState({ 
        email : "", 
        password : ""
    })


    return(
        <>
            <form>
                <label>
                    Email 
                    <input type="text" value={formData.email} />
                </label>
            </form>
        </>
    )
}