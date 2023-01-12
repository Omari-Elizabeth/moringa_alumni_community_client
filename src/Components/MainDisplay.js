//  MainDisplay, this will house every oher component
import { Link } from "react-router-dom";
import Home from "./Home";
import Scroll from 'react-scroll'; 

const ScrollLink = Scroll.ScrollLink; 

export function Navigation() {
  return (
    <nav className="flex gap-4 justify-center items-center">
      <Link to="/home"> Home</Link>
      <Link to="/aboutus"> About</Link>
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
    </nav>
  );
}

function MainDisplay( { user , logged, updateUser , updateLogged }) {

  return (
    <div>
      <Home />
    </div>
  );
}

export default MainDisplay;
