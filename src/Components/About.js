// About Page
import Logo from "../img/logo.png"
import { Link } from 'react-router-dom';  

const About = () => {
  return (
      <>
             <Link to="/home">
                <img src={Logo} alt="logo"  width={100} height={100} />
            </Link>

            <div>
              <h1>Our Vision</h1>
              <p>
                  A world in which anyone can create their future.
              </p>
              <p>
                 Our vision is one that strives to connect our Alumni to the future they envision for themselves.
              </p>
          </div>
      </>
  );
}
export default About;