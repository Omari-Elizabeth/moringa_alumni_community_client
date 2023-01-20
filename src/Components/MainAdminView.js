// All the adminstrator components are displayed here after they are authenticated / Logged In 

import { Link  } from "react-router-dom"; 

import AdminNavigation from './AdminNav'; 

// import AdminPostsDashboard from './Components/AdminPostsDashboard'
// import AdminUsersDashboard from './Components/AdminUsersDashboard'


function MainAdminView( { admin , admin_token , admin_id , setAdmin , }){

    function handleLogOut(){
        localStorage.clear(); 
        setAdmin(null);
    }

    console.log(admin)

    function LoggedAdmin(){
        return(
            <div className="p-5 flex  flex-col-1 md:gap-96 justify-center align-middle bg-white shadow-2xl">
                <h1 className="font-bold text-2xl text-black"> Welcome {admin.username}</h1>
                <button onClick={handleLogOut} className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white">Log Out</button>
            </div>
        )

    }

    function UnLoggedAdmin(){
        return(
            <div className="p-6 min-h-screen bg-inherit flex flex-col gap-5 ">
            <h1 className="font-semibold text-2xl"> Hey Admin! Looks like you're signed out / your login credentieals were unsuccessful. </h1>
            <Link to="/admin_login"> <h1 className="text-slate-200 hover:text-red-400 font-bold text-xl"> Try Logging In again Here</h1> </Link>
        </div>
        )

    }

    return(
        <div>
            { admin ? <LoggedAdmin /> : <UnLoggedAdmin /> }
            <AdminNavigation />
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