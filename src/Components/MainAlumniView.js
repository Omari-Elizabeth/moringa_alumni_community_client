// All the User Views Are Nested Here After the User is Logged In 
// import { Redirect } from "react-router-dom";

// import { useEffect } from "react";
import { useEffect  } from "react";
import { Link } from "react-router-dom"

import PostList from "./PostList";
import Profile from './Profile';
import AnnouncementList from './Announcements';


function MainAlumView( { user , setUser , login_token, user_id }){

    function AlumNavigation(){

        return(
            <div className="flex gap-3 justify-center items-center">
                <h1 className="p-2 font-extrabold text-2xl animate-pulse">Hello {user.username} ! </h1>
            </div>
        )
    }
        

    function LoggedDisplay(){

        return (
            <div className="min-h-screen min-w-screen p-3 flex flex-col justify-center text-left gap-6">
            <div>
                <AlumNavigation />
                <div className="grid grid-flow-col gap-10 items-start">
                    <Profile user={user} setUser={setUser} />
                    <PostList login_token={login_token} user_id={user_id}/>
                    <AnnouncementList />
                </div>
            </div>        
        
            </div>
        )
    }

    function UnloggedDisplay(){
        return(
            <div className="p-6 min-h-screen bg-inherit flex flex-col gap-5">
                <h1 className="font-semibold text-2xl"> Oops! Looks like you're signed out / your login credentieals were unsuccessful. </h1>
                <Link to="/login"> <h1 className="text-slate-500 hover:text-blue-600 font-bold text-xl"> Try Logging In again Here</h1> </Link>
            </div>
        )
    }
    
    useEffect(() => {
        
    },[user, login_token ]); 

    return (
        <div className="bg-slate-300 text-black min-h-screen min-w-screen font-mono">
            {user ? <LoggedDisplay /> : <UnloggedDisplay /> }
        </div>
    )
}




export default MainAlumView; 
