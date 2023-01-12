import './App.css';

import { Route, Switch  } from 'react-router-dom'; 
import { useState } from 'react'; 

import MainDisplay from './Components/MainDisplay';
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import AdminLogin from './Components/AdminLogin';
import About from './Components/About';

import AdminAnnouncementsDashboard from './Components/AdminAnnouncementsDashboard';
import AdminPostsDashboard from './Components/AdminPostsDashboard'
import AdminUsersDashboard from './Components/AdminUsersDashboard'



function App() {

  const [ logged , setLogged ] = useState(false); 
  const [ user, setUser ] = useState(null); 
  const [ admin, setAdmin ] = useState(null); 

  return (
    <div className="App font-mono leading-snug text-center justify-center items-center bg-slate-800 min-h-screen text-slate-300">
    <Switch>
      <Route path="/signup">
          <SignUp  user={user} updateUser={setUser} />
        </Route>

        <Route path="/aboutus">
          <About />
        </Route>
        

      <Route path="/login">
          <Login user={user} updateUser={setUser} logged={logged} updateLogged={setLogged}/>
      </Route>

      <Route path="/admindashboard/announcements">
          <AdminAnnouncementsDashboard />
        </Route>

      <Route path="/adminstrators">
          <div>
              <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> Login Only For Admins</h1>
          </div>
          <AdminLogin admin={admin} updateAdmin={setAdmin}/>
      </Route>
      
        <Route path="/admindashboard/posts">
          <AdminPostsDashboard />
        </Route>

        <Route path="/admindashboard/users">
          <AdminUsersDashboard />
        </Route>
        
      <Route path="/">
        <MainDisplay logged={logged} updateLogged={setLogged} user={user} updateUser={setUser}/>
      </Route>


  </Switch>
   </div>
  );
}

export default App;
