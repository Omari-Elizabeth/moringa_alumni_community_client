// First Screen to appear to user.
import { Link } from 'react-router-dom';
import { Navigation } from "./MainDisplay";

import Footer from "./Footer";
import Logo from "../img/homelogo.png"


function Home(){
    return(
        <div className="min-h-screen p-3">
        <div className="flex gap-7 p-3 justify-center items-center">
            <Link to="/home">
                <img src={Logo} alt="logo" />
            </Link>
            <Navigation />
        </div>
            <div className="grid p-3">
            
                <div>
                    <p>
                    Many graduates struggle with getting opportunities for work and mentorship while
                    others have opportunities they want to share with their fellow former students and
                    often have no platform to do that.
                    </p>
                </div>

                <div>
                    <h1>Our Vision</h1>
                    <section>
                        <p>
                            A world in which anyone can create their future.
                        </p>
                        <p>
                            Our vision is one that strives to connect our Alumni to the future they envision for themselves.
                        </p>
                    </section>
            </div>
            
            </div>
            <Footer className="p-3" />
        </div>
    )
}
export default Home;