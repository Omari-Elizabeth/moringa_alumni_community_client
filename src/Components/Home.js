// First Screen to appear to user.
import { Navigation } from "./MainDisplay";
import Footer from "./Footer.js";

function Home() {
  return (
    <>
      <div
        className="bg-home-image bg-cover bg-opacity-50 "
        style={{ height: "90vh" }}
      >
        <Navigation />
        <div className="items-center ">
          <h1 className="text-international-orange-600 hover:text-black pt-36 font-semibold text-6xl font-anton">
            NETWORK TO BUILD
          </h1> <br></br>
          <p className="text-black text-2xl font-light pt-30 pb-96">
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
