//  MainDisplay, this will house every oher component 
import { Link  } from 'react-router-dom'; 
import Home from './Home';

export function Navigation(){
    return(
        <div className='flex gap-4 justify-center items-center'>
            <Link to="/home"> Home</Link>
            <Link to="/aboutus"> About us</Link>
            <Link to="/contactus"> Contact us</Link>
            <Link to='/signup'>Sign Up</Link>
            <Link to="/login">Log In</Link>
            <Link to="/adminstrators">Adminstrators</Link>
            <Link to="/updateprofile">Update Profile</Link>
        </div>
    )
}

function MainDisplay(){
    return (
        <div>
            <Home />
        </div>
    )
}

export default MainDisplay; 