// //  MainDisplay, this will house every oher component
// import { Link } from "react-router-dom";
// import Home from "./Home";
// import Logo from "../img/homelogo.png";
// import Scroll from "react-scroll";

// const ScrollLink = Scroll.ScrollLink;

// export function Navigation() {
//   return (
//     <>
//       <div className="flex gap-96 ">
//         <div className="m-3">
//           <img
//             src={Logo}
//             className="border rounded-2xl ml-7"
//             alt="logo"
//             width={100}
//             height={100}
//           />
//         </div>

//         <div className="flex gap-9   bg-cloud-burst-600 border rounded-full  text-lg p-9 font-bold text-international-orange-600 ">
//           <Link to="/home" className="hover:text-white">
//             {" "}
//             Home
//           </Link>
//           <Link to="/aboutus" className="hover:text-white">
//             {" "}
//             About us
//           </Link>
//           <ScrollLink to="#footer" spy={true} smooth={true} duration={500}>
//             Contacts
//           </ScrollLink>
//           {/* <Link to="/contactus" className='hover:text-white'> Contact us</Link> */}
//           <Link to="/signup" className="hover:text-white">
//             Sign Up
//           </Link>
//           <Link to="/login" className="hover:text-white">
//             Log In
//           </Link>
//           <Link to="/admin_login" className="hover:text-white">
//             Adminstrators
//           </Link>
//         </div>
//         {/* <Link to="/updateprofile">Update Profile</Link> */}
//       </div>
//     </>
//   );

// }

// function MainDisplay() {
//   return (
//     <div>
//       <Home />
//     </div>
//   );
// }

// export default MainDisplay;

import Scroll from "react-scroll";
import { useState } from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import Logo from "../img/homelogo.png";

export function Navigation() {
  const ScrollLink = Scroll.ScrollLink;
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-cloud-burst-600 border md:rounded-full" >
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <div>
          <img
            src={Logo}
            className="border rounded-2xl ml-7"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-international-orange-600  rounded-md outline-none focus:border-international-orange-600  focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <div className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                        <Link to="/home" className=" font-bold text-international-orange-600 hover:text-white">
            {" "}
            Home
          </Link>
          <Link to="/aboutus" className=" font-bold text-international-orange-600 hover:text-white">
            {" "}
            About us
                </Link>

                <ScrollLink to="#footer" spy={true} smooth={true} duration={500}>
             Contacts
           </ScrollLink>
                <Link to="/signup" className=" font-bold text-international-orange-600 hover:text-white">
            Sign Up
           </Link>
          <Link to="/login" className=" font-bold text-international-orange-600 hover:text-white">
            Log In
          </Link>
          <Link to="/admin_login" className="font-bold text-international-orange-600 hover:text-white">
            Adminstrators
          </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

function MainDisplay() {
  return (
    <div>
      <Home />
    </div>
  );
}

export default MainDisplay;