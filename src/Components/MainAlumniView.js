// All the User Views Are Nested Here After the User is Logged In 
// import { Redirect } from "react-router-dom";

import { Link } from "react-router-dom"

import AnnounceMents from './Announcements';
import PostList from "./PostList";
import Profile from './Profile';

function MainAlumView( { user , setUser , login_token, user_id }){


function AlumNavigation(){

    function signOut(){
        setUser(null)
        localStorage.clear()
    }

    return(
        <div>
            <button onClick={signOut}>Sign Out</button>
        </div>
    )
}
    

function LoggedDisplay(){
    return (
        <div>
            <AlumNavigation />
            <div>
                <h1>Hello {user.username} ! </h1>
                <AnnounceMents login_token={login_token} user_id={user_id}/>
                <PostList login_token={login_token} user_id={user_id}/>
                <Profile />
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
        <>
            {user ? <LoggedDisplay /> : <UnloggedDisplay /> }
        </>
    )
}




export default MainAlumView; 