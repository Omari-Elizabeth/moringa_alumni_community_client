import './App.css';

import MainDisplay from './Components/MainDisplay';
import { Route, Switch } from 'react-router-dom'; 
import SignUp from './Components/SignUpForm';
import Login from './Components/LoginForm';
import About from './Components/About';
import AdminAnnouncementsDashboard from './Components/AdminAnnouncementsDashboard';


function App() {
  return (
    <div className="App font-mono leading-snug text-center justify-center items-center bg-slate-300 min-h-screen text-black">
    <Switch>
      <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/aboutus">
          <About />
        </Route>
        

      <Route path="/login">
          <Login />
      </Route>

      <Route path="/adminannouncementsdashboard">
          <AdminAnnouncementsDashboard />
        </Route>
      
      <Route path="/">
        <MainDisplay />
      </Route>
  </Switch>
   </div>
  );
}

export default App;
