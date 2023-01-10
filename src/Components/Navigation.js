import { Link } from 'react-router'; 

function Navigation(){
    return(
        <>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contacts'>Contact Us</Link>
            </div>
        </>
    )
}

export default Navigation; 