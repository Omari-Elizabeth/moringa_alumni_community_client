//  MainDisplay, this will house every oher component 
import Home from "./Home";
import { BrowserRouter as Routes,Router, Route} from "react-router-dom";
import Login from "./LoginForm";
import About from "./About";
import Navigation from "./Navigation";
import SignUp from "./SignUpForm";

function MainDisplay(){
    return (
        <>
            <Router>
            <Navigation />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Login" element={<Login/>} />
                <Route path="/AboutUs" element={<About />} />
                <Route path="/SignUp" element={<SignUp />} />
    
            </Routes>
            </Router>
          
              
          
          
            <h1 className="animate-pulse font-mono text-4xl"> This is the Main Component that will house every other thing.</h1>
            
        
        </>
    )
}

export default MainDisplay; 