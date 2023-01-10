//  MainDisplay, this will house every oher component 
import Home from "./Home";
import Login from "./LoginForm";
function MainDisplay(){
    return (
        <>
                     <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/AboutUs" element={<About />} />
                <Route path="/SignUp" element={<SignUpForm />} />
                <Route path="/ContactUs" element={<Contact/>} />
            </Routes>
            <h1 className="animate-pulse font-mono text-4xl"> This is the Main Component that will house every other thing.</h1>
            
        
        </>
    )
}

export default MainDisplay; 