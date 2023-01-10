// First Screen to appear to user.
import Footer from "./Footer";
import { Navigation } from "./MainDisplay";
import Logo from "../img/homelogo.png"


function Home(){
    return(
        <div className="min-h-screen">
            <Navigation />
            <div>
                <div>
                <img src={Logo} alt="logo"  width={100} height={100} />
                <p>
                Many graduates struggle with getting opportunities for work and mentorship while
                others have opportunities they want to share with their fellow former students and
                often have no platform to do that.
            </p>
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;