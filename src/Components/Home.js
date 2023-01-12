// First Screen to appear to user.
import Footer from "./Footer";
import { Navigation } from "./MainDisplay";



function Home(){
    return (
        <>
             <div className="min-h-screen">
                <Navigation />
                <div>
                    <p>
                Many graduates struggle with getting opportunities for work and mentorship while
                others have opportunities they want to share with their fellow former students and
                        often have no platform to do that.
                    </p>
                </div>
            </div>
            <Footer />
    
        </>
       
    )
}
export default Home;