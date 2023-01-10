import { Link } from 'react-router'; 

function Navigation(){
    return(
        <>
            <nav>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/about'>About Us</Link>
                <Link to='/contacts'>Contact Us</Link>
                <Link to="/Login">LOG IN</Link>
                <Link to="/SignUp">SIGN UP</Link>
            </div>
            </nav>
          
        </>
    )
}

export default Navigation; 