// First Screen to appear to user.
import Footer from "./Footer";
import { Navigation } from "./MainDisplay";



function Home() {
    return (
        < >
         <div className="min-h-screen  bg-home-image bg-cover bg-opacity-50 ">
                <Navigation />
                <div className="items-center " >
                    <h1 className="text-international-orange-600 pt-36 text-5xl">NETWORK TO BUILD</h1>
                    <p className="text-black text-lg pt-30 pb-96">
                Many graduates struggle with getting opportunities for work and mentorship while<br></br>
                others have opportunities they want to share with their fellow former students and<br></br>
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
                <Footer />
            </div>
        </>
     )
}
export default Home;