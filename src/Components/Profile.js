// Profile Page 

import { Link } from "react-router-dom";

function Profile( { user , setUser  }){     
  
    // console.log(user.profile.avatar_url)
    console.log(user.profile)

    function signOut(){
        localStorage.clear(); 
        
        setUser(null); 
    }   
    
    function DisplayProfile(){
        
        const { fname, lname, gender, cohort, profession , avatar  } = user.profile;
        

        return (
            <div>
                <div className="text-left p-5 text-slate-300 border flex flex-col gap-3">
                <h2>Hey it's {user.username}</h2>
                <div>
                    {/* <img src={user.profile.avatar_url} alt="my profile pic" style={{borderRadius: '50%',width: '100px', height: '100px'}}/> */}
                    {user.profile ? <img src={user.profile.avatar_url} alt="Profile pic" style={{borderRadius: '50%',width: '100px', height: '100px'}}/> : null}
                </div>
                    <h3>Name: {fname} {lname}</h3>
                    <h4>Job Title: {profession}</h4>
                    <h4>{gender}</h4>
                    <h4>Cohort: {cohort}</h4>
                    <button onClick={signOut} className=" bg-red-600 p-2 border rounded-lg hover:bg-slate-500 hover:text-white">Log Out</button>
                </div>
            </div>
        )
    }

    function NoProfile(){
        return(
            <div className="text-left p-5 text-slate-300 border flex flex-col gap-3">
            <h1> Hey, {user.username}. You Have No Profile Information To Display.</h1>
                <h2>Update Your Profile <Link to="/update_profile" className="italic text-blue-500 ">Here </Link> </h2>
                <button onClick={signOut} className=" bg-red-600 p-2 border rounded-lg hover:bg-slate-500 hover:text-white">Log Out</button>
            </div>
        )
    }
      
    return(
        <section >
            <div className="min-w-screen font-semibold bg-slate-700 border rounded-md">
                { user.profile ===  null ? <NoProfile /> : <DisplayProfile /> } 
            </div>
        </section>
    )
}

export default Profile; 