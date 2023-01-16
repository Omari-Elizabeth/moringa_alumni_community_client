// First Screen to appear to user.
import { Navigation } from "./MainDisplay";
import Footer from "./Footer.js"






function Home() {
    return (
        < >
         <div className="h-1/3 bg-home-image bg-cover bg-opacity-50 ">
                <Navigation />
                <div className="items-center " >
                    <h1 className="text-international-orange-600 pt-36 text-6xl font-anton">NETWORK TO BUILD</h1>
                    <p className="text-black text-xl pt-30 pb-96">
                Many graduates struggle with getting opportunities for work and mentorship while<br></br>
                others have opportunities they want to share with their fellow former students and<br></br>
                        often have no platform to do that.
                    </p>
        </div>
                 

               
            </div>
          <Footer />
        </>
     )
}
export default Home;