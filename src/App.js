import './App.css';

import MainDisplay from './Components/MainDisplay';
import { Route, Switch  } from 'react-router-dom'; 
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import AdminLogin from './Components/AdminLogin';

function App() {
  return (
    <div className="App font-mono leading-snug text-center justify-center items-center bg-slate-300 min-h-screen text-black">
    <Switch>
      <Route path="/signup">
          <SignUp />
      </Route>

      <Route path="/login">
          <Login />
      </Route>

      <Route path="/adminstrators">
          <div>
              <h1 className='text-3xl p-4 text-orange-600 animate-pulse'> This is an admin side!</h1>
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
