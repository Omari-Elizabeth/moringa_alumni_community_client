//  MainDisplay, this will house every oher component 
import { Link  } from 'react-router-dom'; 
import Home from './Home';

export function Navigation(){
    return(
        <div className='flex gap-4 justify-center items-center bg-blue-700 text-slate-50 p-3'>
            <button className='border-b '>
            <Link to="/home" className='font-bold hover:text-zinc-200'> Home</Link>
            </button>

            <button className='border-b '>
            <Link to="/aboutus" className='font-bold hover:text-zinc-200'> About us</Link>
            </button>
            
            <button className='border-b '>
                <Link to="/contactus"className='font-bold hover:text-zinc-200'> Contact us</Link>
            </button>

            <button className='border-b '>
                <Link to='/signup'className='font-bold hover:text-zinc-200'>Sign Up</Link>
            </button>
            
            <button className='border-b '>
                <Link to="/login" className='font-bold hover:text-zinc-200'>Log In</Link>
            </button>
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