//  Sign Up Form
import { useState } from "react";
import Logo from "../img/formlogo.png";
import { Link, Redirect } from "react-router-dom";

function SignUp( { user , setUser }){
   
    // const [ username, setUsername ] = useState("");
    // const [ password, setPassword ] = useState(""); 

    const [signupData,setSignupData]=useState({})

    const [ errorMessage, setErrorMessage ] = useState(""); 
    const [ hideError, setHideError ] = useState(true)

    function handleSignupData(e){

        console.log(e.target.value)

    }

    function handleSubmit(e){
        e.preventDefault()
    
 
        fetch('/users', {
            method : "POST", 
            headers : { "Content-Type" : "application/json" }, 
            body : JSON.stringify({signupData})
        })
        .then(r => {
            if(r.ok){
                r.json().then(d => {
                    console.log(d, "<= everything returned from the server")

                    // This will save the token in localStorage to be used in an Authentication Header in future requests.
                    localStorage.setItem("login_token", d.token); 
                    localStorage.setItem("user_id", d.id)

                    setUser(d.user); 

          // This will save the token in localStorage to be used in an Authentication Header in future requests.
          localStorage.setItem("login_token", d.token);
          localStorage.setItem("user_id", d.user.id);

          updateUser(d.user);

            <div className="m-auto ">
                <img src={Logo} alt="logo" className="border rounded-xl mt-3" width={100} height={100} />
                </div>
                
                <h1 className="text-xl  text-international-orange-600 font-bold" >SIGN UP</h1>
                <label className="text-white text-lg">
                    Username 
                <input type="text" 
                    className="text-black p-2 m-2 border rounded-3xl w-6/12" 
                    name="username"
                    onChange={(e) =>handleSignupData(e)}
                    placeholder="Pick a username"
                    required
                    /> 
                
                </label>

                <label className="text-white text-lg">
                    Password 
                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-3xl w-6/12" 
                    name="password"
                    onChange={(e) =>handleSignupData(e)}
                    placeholder="Enter Password (minimum 4 characters)"
                    required/>
                    
                </label>
                <label className="text-white text-lg">
                    Confirm Password 
                    <input type="password" 
                    className="text-black p-2 m-2 border rounded-3xl w-6/12" 
                    name="password_confirmation"
                    onChange={(e) =>handleSignupData(e)}
                    placeholder="Confirm Password"
                    required/>
                </label>

        <h1 className="text-xl  text-international-orange-600 font-bold">
          SIGN UP
        </h1>
        <label className="text-black text-sm md:text-white md:text-lg">
          Username
          <input
            type="text"
            className="text-black p-2 m-2 border rounded-3xl w-6/12"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Pick a username"
          />
        </label>

        <label className="text-black text-sm md:text-white md:text-lg">
          Password
          <input
            type="password"
            className="text-black p-2 m-2 border rounded-3xl w-6/12"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter Password (minimum 4 characters)"
          />
        </label>

        <input
          type="submit"
          className="rounded-full text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border  m-auto"
        />

        <div className="flex justify-center pb-10 gap-5 text-black text-sm md:text-white md:text-lg ">
          <h3>
            {" "}
            Have an Account?{" "}
            <Link to="/login" className="text-international-orange-600">
              {" "}
              Log In{" "}
            </Link>{" "}
          </h3>
          <h3>
            {" "}
            <Link to="/home">
              Return To{" "}
              <span className="text-international-orange-600 font-bold">
                {" "}
                Home
              </span>
            </Link>{" "}
          </h3>
        </div>
      </form>
      <div>
        <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>
          {errorMessage}
        </h3>
      </div>

      {user ? <Redirect to="/alum_home" /> : <Redirect to="/signup" />}
    </section>
  );

}

export default SignUp;
