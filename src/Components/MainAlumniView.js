// All the User Views Are Nested Here After the User is Logged In 
// import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom"

// import AnnouncementList from './Announcements';

import PostList from "./PostList";
import Profile from './Profile';

function MainAlumView( { user , setUser , login_token, user_id }){


function AlumNavigation(){

    function signOut(){
        setUser(null)        
        localStorage.clear()
    }

    return(
        <div className="flex gap-3 justify-center items-center">
            <h1 className="p-2">Hello {user.username} ! </h1>
            {/* <button className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white"><Link to="/profile">Profile</Link></button> */}
            <button className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white"><Link to="/announcements">Announcements</Link></button>
            <button onClick={signOut} className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white">Log Out</button>
        </div>
    )
}
    

function LoggedDisplay(){
    return (
        <div className="min-h-screen p-4 flex flex-col justify-center ">
        <div>
            <AlumNavigation />
            <Profile />
                <section>
                    <h1> Posts : </h1>
                    <PostList login_token={login_token} user_id={user_id}/>
                </section>
        </div>        
     
        </div>
    )
}

function UnloggedDisplay(){
    return(
        <div className="p-6 min-h-screen bg-inherit flex flex-col gap-5">
            <h1 className="font-semibold text-2xl"> Oops! Looks like you're signed out / your login credentieals were unsuccessful. </h1>
            <Link to="/login"> <h1 className="text-slate-200 hover:text-red-400 font-bold text-xl"> Try Logging In again Here</h1> </Link>
        </div>
    )
}
    console.log(user); 
       
    return (
        <div className="bg-slate-300 text-black min-h-screen font-mono">
            {user ? <LoggedDisplay /> : <UnloggedDisplay /> }
        </div>
    )
}




export default MainAlumView; 
