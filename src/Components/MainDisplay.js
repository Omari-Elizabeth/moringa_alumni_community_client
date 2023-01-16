//  MainDisplay, this will house every oher component 
import { Link  } from 'react-router-dom'; 
import Home from './Home';
import Logo from "../img/homelogo.png"
import Scroll from 'react-scroll'; 

const ScrollLink = Scroll.ScrollLink; 

export function Navigation(){
    return (
        <div className='flex gap-96 mt-3'>
            <div className='m-3'>
            <img src={Logo} className="border rounded-2xl ml-7" alt="logo"  width={100} height={100} />
            </div>
               
               <div className='flex gap-9 pt-7  bg-cloud-burst-600 border rounded-full p-9 text-lg float-right mr-8 font-bold text-international-orange-600 '>
            <Link to="/home" className='hover:text-white'> Home</Link>
            <Link to="/aboutus" className='hover:text-white'> About us</Link>
            <Link to="/contactus" className='hover:text-white'> Contact us</Link>
            <Link to='/signup' className='hover:text-white'>Sign Up</Link>
            <Link to="/login" className='hover:text-white'>Log In</Link>
                <Link to="/adminstrators" className='hover:text-white'>Adminstrators</Link>
                
                <ScrollLink
        to="#footer"
        spy={true}
        smooth={true}
        duration={500}
        >
          Contacts
        </ScrollLink>
      <Link to="/signup"> Sign Up </Link>
      <Link to="/login">Log In</Link>
    </div>
            {/* <Link to="/updateprofile">Update Profile</Link> */}
        </div>
        
     
    )
}

function MainDisplay() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default MainDisplay;
