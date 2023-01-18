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
            <div>
                <div className="text-left p-5 text-slate-300 border flex flex-col gap-3">
                <h2>Your Profile</h2>
                <div>
                    <img src={avatar} alt="" />
                </div>
                    <h3>{fname} {lname}</h3>
                    <h4>{profession}</h4>
                    <h4>{gender}</h4>
                    <h4>{cohort}</h4>
                    <button onClick={signOut} className=" bg-red-600 p-2 border rounded-lg hover:bg-slate-500 hover:text-white">Log Out</button>
                </div>
            </div>
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
        <section >
            <div className="min-w-screen font-semibold bg-slate-700 border rounded-md">
                { user.profile ?  <DisplayProfile /> :  <NoProfile /> }
            </div>
        </section>
    )
}

export default Profile; 