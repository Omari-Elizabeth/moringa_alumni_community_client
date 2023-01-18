// Profile Page 

import { useEffect } from "react";

function Profile( { user , setUser }){
   
    const { fname, lname, gender, cohort, profession , avatar  } = user.profile;

    console.log(user); 
    console.log(user.profile)
        
    function signOut(){
        localStorage.clear(); 

        setUser(null); 
    }   

    function DisplayProfile(){
        return (
            <>
                <div className="text-left">
                <h2>Your Profile</h2>
                <div>
                    <img src={avatar} alt="" />
                </div>
                    <h3>{fname} {lname}</h3>
                    <h4>{profession}</h4>
                    <h4>{gender}</h4>
                    <h4>{cohort}</h4>
                    <button onClick={signOut} className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white">Log Out</button>
                </div>
            </>
        )
    }

    function NoProfile(){
        return(
            <>
                <div>
                    <h1> No Profile To Display! </h1>
                </div>
            </>
        )
    }

    useEffect(() => {
        
    },[user])

    return(
        <div className="min-h-screen min-w-screen font-semibold bg-slate-700">
            { user.profile ?  <DisplayProfile /> :  <NoProfile /> }
        </div>
    )
}

export default Profile; 