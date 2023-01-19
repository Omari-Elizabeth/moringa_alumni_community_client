// First Screen to appear to user.
import { Navigation } from "./MainDisplay";
import Footer from "./Footer.js";

function Home() {
  return (
    <>
      <div className="bg-home-image  bg-cover"style={{ height: "100vh" }} >
        <Navigation />
        <div className=" flex flex-col items-center ">
          <h1 className="text-international-orange-600 hover:text-black pt-36 font-semibold text-3xl md:text-6xl font-anton">
            NETWORK TO BUILD
          </h1> <br></br>
          <p className="items-center p-3 text-black md:text-2xl text-sm font-light pt-30 pb-96">
                      Facilitate interaction to achieve engagement by
                      establishing a spirit of comraderary <br></br>
                      among various personnel therefore knowing your 
                      members' unique needs.<br></br>
                      Sign up to be part of this amazing journey.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Home;
