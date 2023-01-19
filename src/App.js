import './App.css';

import {  Route, Switch  } from 'react-router-dom'; 
import { useEffect, useState } from 'react'; 


// Home / Main Components :
import MainDisplay from './Components/MainDisplay';
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import About from './Components/About';


// Admin Components :
import AdminAnnouncementsDashboard from './Components/AdminAnnouncementsDashboard';
import AdminPostsDashboard from './Components/AdminPostsDashboard'
import AdminUsersDashboard from './Components/AdminUsersDashboard'
import AdminLogin from './Components/AdminLogin';
import UpdateProfile from './Components/UpdateProfile';

// Alum Components : 
import MainAlumView from './Components/MainAlumniView';
import MainAdminView from './Components/MainAdminView';
import SinglePostPage from './Components/FetchPost';

function App() {

  const [ user, setUser ] = useState(null); 
  const [ admin, setAdmin ] = useState(null); 
  const [ announcements, setAnnouncements ] = useState([])

  const login_token = localStorage.getItem("login_token"); 
  const user_id = localStorage.getItem("user_id"); 

  const admin_token = localStorage.getItem("admin_token");
  const admin_id = localStorage.getItem("admin_id");

  useEffect(() => {

    fetch(`/users/${user_id}`,{
      method : "GET", 
      Authorize : `Bearer ${login_token}`
    })
    .then(r => {
      if(r.ok){
        r.json().then(d => {
          setUser(d)
        })
      }
    })

  },[login_token,user_id])

  useEffect(() => {
    fetch(`/admins/${admin_id}`, {
      method : "GET", 
      Authorize : `Bearer ${admin_token}`
    })
    .then(r => {
      if(r.ok){
        r.json().then(d => {
          console.log(d)
          setAdmin(d)
          setAnnouncements(d.announcements)
        })
      }
    })
  },[admin_token, admin_id])

  
  return (
    <div className="App alto-500 font-sans leading-snug text-center justify-center items-center  min-h-screen text-slate-300  min-w-screen">
    <Switch>
      <Route path="/signup">
          <SignUp  user={user} setUser={setUser} />
        </Route>

        <Route path="/aboutus">
          <About />
        </Route>

        {/* <Route path="/updateprofile">
          <UpdateProfile />
        </Route> */}
        

      <Route path="/login">
          <Login user={user} updateUser={setUser} />
      </Route>

      <Route path="/admindashboard/announcements">
          <AdminAnnouncementsDashboard />
        </Route>

       
        {/* <Route path="/adminstrators">
      
      </Route> */}
      <Route path="/admin_login">
          <div>
              <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> Login Only For Admins</h1>
          </div>
          <AdminLogin admin={admin} setAdmin={setAdmin}/>
      </Route>
      
        <Route path="/admindashboard/posts">
          <AdminPostsDashboard />
        </Route>

        <Route path="/admindashboard/users">
          <AdminUsersDashboard />
        </Route>

      <Route path="/alum_home">
          <MainAlumView  user={user} setUser={setUser} login_token={login_token} user_id={user_id} />
      </Route>

      <Route path={`/posts/:id`}>
        <SinglePostPage />
      </Route>

      <Route path="/update_profile">
        <UpdateProfile />
      </Route>

  
      <Route path="/admin_home">
          <MainAdminView admin={admin} admin_token={admin_token} admin_id={admin_id} setAdmin={setAdmin}/>
      </Route>

      <Route path="/admin_announcements">
          <AdminAnnouncementsDashboard announcements={announcements} />
      </Route>
        

      <Route path="/">
        <MainDisplay user={user} setUser={setUser}/>
      </Route>


  </Switch>
   </div>
  );
}

export default App;

