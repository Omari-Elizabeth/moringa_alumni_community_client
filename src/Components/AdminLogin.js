// Admin  Login Page
import { useState } from 'react'; 
import { Link, Redirect  } from "react-router-dom";
import { redirect } from "react-router"; 
import Logo from "../img/formlogo.png"

function AdminLogin( { admin , setAdmin }){
     
    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState(""); 

    const [ errorMessages, setErrorMessages ] = useState([]); 
    const [ hideErrors, setHideErrors ] = useState(true)
  
  
    function handleSubmit(e){
        e.preventDefault()

        fetch('/admin-login',{
            method : 'POST', 
            headers : {
                "Content-Type" : "application/json",
            },
            body : JSON.stringify({ username, password })
        })
        .then(r => {
            if(r.ok){
                r.json().then(d => {
                    // Store Admin Token and their ID in LocalStorage 
                    localStorage.setItem("admin_token", d.token); 
                    localStorage.setItem("admin_id", d.admin.id);
                    
                    // Store Admin in State 
                    setAdmin(d.admin);
                    
                    redirect("/alumhome");
                })
            } else { 
                r.json().then((e) => {
                    setTimeout(() => {
                        console.log(e.errors) 
                        setHideErrors(false);
                        setErrorMessages(e.errors);
                    },500);
                    setHideErrors(true);
                    setErrorMessages([]);
                })
            }
        } )
    }
    return (
            <div className='p-5'> 
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-col gap-3 rounded-3xl p-3 border-international-orange-600  border-solid md:border-white border-2 w-2/4 m-auto md:bg-cloud-burst-600 mt-8 h-full" style={{ height: "80vh" }}>
            <div className="m-auto ">
                <img src={Logo} alt="logo" className="border rounded-xl mt-3" width={100} height={100} />
                </div>
            <label className="text-black text-sm md:text-white md:text-lg">
                    Username 
                <input type="text" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={username} 
                    onChange={(e) => {
                        setUsername(e.target.value)
                        }}
                        placeholder="Pick a username"/> 
                </label>

                <label className="text-black text-sm md:text-white md:text-lg">
                    Password 
                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-lg w-6/12" 
                    value={password} 
                    onChange={(e) => {
                        setPassword(e.target.value)
                        }}
                        placeholder="Enter Password (minimum 4 characters)"/>
                </label>

                <input type="submit" className='rounded-full text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white  w-20 md:w-40 p-3 border m-auto'/>

                <div className='flex justify-center gap-5 text-black text-sm md:text-white md:text-lg'>
                    <h3> <Link to='/home'>Return To<span className='text-international-orange-600 font-bold'> Home</span> </Link> </h3>
                </div>

                <div>
                    <section hidden={hideErrors}>
                        {errorMessages.map((e) => {
                            return <h3 className="text-red-600 font-bold text-xl p-3" key={errorMessages.indexOf(e)}>{e}</h3>

                        })}
                    </section>
                 </div>

            </form>

            { admin ? <Redirect to="/admin_home" /> : <Redirect to="/admin_login" /> }
        </div>
    )
}


export default AdminLogin