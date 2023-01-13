// All the adminstrator components are displayed here after they are authenticated / Logged In 

import { Link } from "react-router-dom"; 

// import AdminAnnouncementsDashboard from './Components/AdminAnnouncementsDashboard';
// import AdminPostsDashboard from './Components/AdminPostsDashboard'
// import AdminUsersDashboard from './Components/AdminUsersDashboard'
// import AdminNavigation from './AdminNav'; 


function MainAdminView( { admin , admin_token , admin_id , setAdmin}){
    
    function handleLogOut(){
        localStorage.clear(); 
        setAdmin(null);
    }

    function LoggedAdmin(){
        return(
            <div className="p-5 flex gap-6 justify-center align-middle">
                <h1 className="font-bold text-2xl"> Hello Admin, {admin.username}</h1>
                <button onClick={handleLogOut} className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white">Log Out</button>
            </div>
        )

    }

    function UnLoggedAdmin(){
        return(
            <div className="p-6 min-h-screen bg-inherit flex flex-col gap-5">
            <h1 className="font-semibold text-2xl"> Hey Admin! Looks like you're signed out / your login credentieals were unsuccessful. </h1>
            <Link to="/admin_login"> <h1 className="text-slate-200 hover:text-red-400 font-bold text-xl"> Try Logging In again Here</h1> </Link>
        </div>
        )

    }

    return(
        <div>
            { admin ? <LoggedAdmin /> : <UnLoggedAdmin /> }
        </div>
    )
}

export default MainAdminView; 

// {/* <Route path="/admindashboard/announcements">
//           <AdminAnnouncementsDashboard />
//         </Route>

//       <Route path="/adminstrators">
//           <div>
//               <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> Login Only For Admins</h1>
//           </div>
//           <AdminLogin admin={admin} updateAdmin={setAdmin}/>
//       </Route>
      
//         <Route path="/admindashboard/posts">
//           <AdminPostsDashboard />
//         </Route>

//         <Route path="/admindashboard/users">
//           <AdminUsersDashboard />
//         </Route> */}