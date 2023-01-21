//  Sign Up Form 
// import { useState  } from "react";
// import Logo from "../img/formlogo.png"
// import { Link, Redirect } from 'react-router-dom';



// function SignUp({ user, setUser }) {

//     const [signupData, setSignupData] = useState({
//         username: '',
//         password: '',
//         password_confirmation: ''

//     });

//     const [errors, setErrors] = useState([]);

//     function handleSignupData(e) {

//         setSignupData({ ...signupData, [e.target.name]: e.target.value });
//         console.log(signupData)

//  Sign Up Form
import { useState, useEffect } from "react";
import Logo from "../img/formlogo.png"
import { Link, Redirect} from 'react-router-dom';
function SignUp({ user, setUser }) {
    const [signupData, setSignupData] = useState({
        username: '',
        password: '',
        password_confirmation: ''
    });
    const [errors, setErrors] = useState([]);
    const [isSignedUp, setIsSignedUp] = useState(false);
    function handleSignupData(e) {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
        console.log(signupData)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setErrors([]);
        
        if (!signupData.username || !signupData.password || !signupData.password_confirmation) {
            setErrors(errors => [...errors, "All fields must not be blank"]);
            return;
        }

        if (signupData.password !== signupData.password_confirmation) {
            setErrors(errors => [...errors, "Password and password confirmation must match"]);
            return;
        }

        fetch('/users', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signupData)
        })
            .then(r => {
                if (r.ok) {
                    r.json().then((d) => {
                        console.log(d, "<= everything returned from the server")
                        // This will save the token in localStorage to be used in an Authentication Header in future requests.
                        localStorage.setItem("login_token", d.token);
                        localStorage.setItem("user_id", d.id);               
                        setUser(d.user);
                        alert("Signup successful,You re being redirected to your account")
                        return <Redirect to="/alum_home"/>
                        // setIsSignedUp(true);
                        // alert("Signup successful,proceed to Login")
                        //  return<Redirect to="/login" />;
                    })
                } else {
                    r.json().then((e) => {
                        console.log(e)
                        // setErrors(errors => [...errors, e.message])
                        setErrors(errors => [...errors, e.errors[0]])
                        // console.log(e.errors[0])
                        console.log(errors)
                    })
                }
            })
    }

    return (
        <section className="min-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3  rounded-3xl border-solid border-international-orange-600 md:border-white border-2 w-full md:w-2/4  m-auto  md:bg-cloud-burst-600 mt-20  " style={{ height: "80vh" }}>
                <div className="m-auto ">
                    <img src={Logo} alt="logo" className="border rounded-xl mt-3" width={100} height={100} />
                </div>
                <h1 className="text-xl  text-international-orange-600 font-bold" >SIGN UP</h1>
                <label className="text-black text-sm md:text-white md:text-lg">
                    Username
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-6/12"
                        name="username"
                        onChange={(e) => handleSignupData(e)}
                        placeholder="Pick a username"
                        required
                    />
                </label>
                <label className="text-black text-sm md:text-white md:text-lg">
                    Password
                    <input type="password"
                        className="text-black p-2 m-2 border rounded-3xl w-6/12"
                        name="password"
                        onChange={(e) => handleSignupData(e)}
                        placeholder="Enter Password (minimum 4 characters)"
                        // required 
                        />

                </label>
                <label className="text-black text-sm md:text-white md:text-lg">
                    Confirm Password
                    <input type="password"
                        className="text-black p-2 m-2 border rounded-3xl w-6/12"
                        name="password_confirmation"
                        onChange={(e) => handleSignupData(e)}
                        placeholder="Confirm Password"
                        required />
                </label>
                <input type="submit" className=' text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border rounded-3xl m-auto' />

                <div className="flex justify-center gap-5">
                    <h3> Have an Account? <Link to='/login' className="text-international-orange-600"> Log In </Link> </h3>
                    <h3> <Link to='/home'>Return To <span className="text-international-orange-600 font-bold"> Home</span></Link> </h3>
                </div>
            </form>
            {/* <div className="flex justify-center gap-5">
                <h3> Have an Account? <Link to='/login' className="text-red-500"> Log In </Link> </h3>
                <h3> <Link to='/home'>Return To Home</Link> </h3>
            </div> */}
            <div className="text-red-600 font-bold text-xl p-3">
                {errors.length > 0 && (
                    <div>
                        {errors.map((error, index) => (
                            <p key={index}>{`* ${error}`}</p>
                        ))}
                    </div>
                )}
                {/* <h3 className="text-red-600 font-bold text-xl p-3" hidden={hideError}>{errorMessage}</h3> */}
            </div>

            {user ? <Redirect to="/alum_home" /> : <Redirect to="/signup" />}
        </section>
    )

}
export default SignUp;