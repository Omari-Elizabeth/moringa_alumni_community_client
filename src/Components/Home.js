// First Screen to appear to user.
import Footer from "./Footer";
import { Navigation } from "./MainDisplay";


function Home(){
    return(
        <div className="min-h-screen">
            <Navigation />
            <div>
                <div>
                    Mission Statement with background picture here
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default Home;