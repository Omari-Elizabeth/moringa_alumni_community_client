//  MainDisplay, this will house every oher component 
import { Link  } from 'react-router-dom'; 
import Home from './Home';
import Logo from "../img/homelogo.png"

export function Navigation(){
    return (
        <div className='flex gap-96 bg-cloud-burst-600'>
            <div className='m-3'>
            <img src={Logo} alt="logo"  width={100} height={100} />
            </div>
               
               <div className='flex gap-9 pt-7 active:text-white  text-lg float-right mr-8 font-bold text-international-orange-600 '>
            <Link to="/home" className='hover:text-white'> Home</Link>
            <Link to="/aboutus" className='hover:text-white'> About us</Link>
            <Link to="/contactus" className='hover:text-white'> Contact us</Link>
            <Link to='/signup' className='hover:text-white'>Sign Up</Link>
            <Link to="/login" className='hover:text-white'>Log In</Link>
            <Link to="/adminstrators" className='hover:text-white'>Adminstrators</Link>
            {/* <Link to="/updateprofile">Update Profile</Link> */}
        </div>
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