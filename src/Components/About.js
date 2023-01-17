// About Page
import { Navigation } from "./MainDisplay";
import Footer from "./Footer.js"

const About = () => {
  return (
    <>
      <div className=" min-h-screen bg-about-image bg-cover">
        <Navigation />
        <div className="w-96 text-xl bg-black opacity-70 ml-8 mt-6">
          <h1 className="text-5xl text-international-orange-600 ">Our Vision</h1>
          <div className="pt-4 ">
          <p className="font-bold">A world in which anyone<br></br> can create their future.</p>
          <p className="pt-4 pb-36 p-2">Our vision is one that strives to connect our Alumni to the future
            they envision for themselves.
            </p>
         
          </div>
         
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
