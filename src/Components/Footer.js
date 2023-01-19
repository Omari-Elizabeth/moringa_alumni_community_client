// Footer Component
import Insta from "../img/insta.png";
import Linkedin from "../img/linkedin.png";
import Twitter from "../img/twitter.png";
import Facebook from "../img/face.png";

// import {
//   FaInstagram,
//   FaFacebookSquare,
//   FaTwitter,
//   FaLinkedinIn,
// } from "react-icons/fa";
import { Element } from "react-scroll";

function Footer() {
  return (
    <>
      <Element id="footer" name="footer">
        <div className="bg-cloud-burst-600 w-full px-28 "  style={{ height: "80vh" }}>
          <div className="grid grid-cols-1 md:flex pb-19 gap-8 ">
            <div className=" w-1/2 ">
              <h3 className="text-2xl font-bold text-international-orange-600 pt-10 pb-3">
                Contact Us
              </h3>
              <section className="w-full md:w-2/3 p-4 m-6  items-center">
                <h2 className="text-lg font-bold text-international-orange-600 ">
                  {" "}
                  Email: <span className="italic gap-6 text-white">alumni@connect.com</span>
                </h2><br></br>
                <h2 className="text-lg font-bold text-international-orange-600 ">
                  {" "}
                  <span className=" text-white"> P.O Box:</span> <span className="italic gap-8">28860-0100 </span>{" "}
                </h2><br></br>
                <h2 className="text-lg font-bold text-international-orange-600 ">
                  {" "}
                  Telephone: <span className="italic gap-10 text-white">0734567823 </span>
                              </h2><br></br>
                              <h2 className="text-lg font-bold text-international-orange-600 ">
                  {" "}
                  <span className="italic gap-10 text-white">Fax: </span> 020 363-6157 
                </h2><br></br>
              </section>
            </div>
            <div>
              <h3 className=" pt-8 pb-8  text-2xl font-bold text-international-orange-600 ">
                Location
              </h3>
              <div className="w-full md:w-2/3">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.16244016024!2d36.7846067!3d-1.3004862!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x940b62a3c8efde4c!2sMoringa%20School!5e0!3m2!1sen!2ske!4v1673513978283!5m2!1sen!2ske"
                  title="google-map"
                  width="500"
                  height="250"
                  className="float-right"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

                  <div className="  flex justify-center items-center gap-14 pt-6 ">
                  <a href="https://www.instagram.com/moringaschool/">
                  <img
            src={Insta}
            className="border rounded-2xl ml-7"
            alt="logo"
            width={25}
            height={25}
                      />
                      </a>
                      
                      <a href="https://www.linkedin.com/school/moringa-school/?originalSubdomain=ke">
                                    
                      <img
            src={Linkedin}
            className="border rounded-2xl ml-7"
            alt="logo"
            width={25}
            height={25}
                      />
      </a>
              
      <a href="https://twitter.com/moringaschool" >
      <img
            src={Twitter}
            className="border rounded-2xl ml-7"
            alt="logo"
            width={25}
            height={25}
                      />
      </a> 
                      
    

<a href="https://www.facebook.com/moringaschool/" >
<img
            src={Facebook}
            className="border rounded-2xl ml-7"
            alt="logo"
            width={30}
            height={30}
                      />
      </a>
                      
          
                      

            {/* <button >
              <FaFacebookSquare />
            </button>
            <button>
              <FaInstagram />
            </button>
            <button>
              <FaTwitter />
            </button>
            <button>
              <FaLinkedinIn />
            </button>
          </div> */}
        
                  </div>
                  <span className="  text-lg text-international-orange-600">
            {" "}
            Alumni Connect
          </span>
              </div>
        
          </Element>
         
    </>
  );
}

export default Footer;
