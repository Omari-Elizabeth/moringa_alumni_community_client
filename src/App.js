import './App.css';

import MainDisplay from './Components/MainDisplay';
import { Route, Switch  } from 'react-router-dom'; 
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import AdminLogin from './Components/AdminLogin';
import About from './Components/About';
// import UpdateProfile from './Components/UpdateProfile';

function App() {
  return (
    <div className="App font-sans leading-snug text-center justify-center items-center  min-h-screen text-slate-300">
    <Switch>
      <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>

        {/* <Route path="/updateprofile">
          <UpdateProfile />
        </Route> */}
        

      <Route path="/login">
          <Login />
      </Route>

      <Route path="/adminstrators">
          <div>
              <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> Only Login For Admins</h1>
          </div>
          <AdminLogin />
      </Route>
      
      <Route path="/">
        <MainDisplay />
      </Route>
  </Switch>
   </div>
  );
}

export default App;
