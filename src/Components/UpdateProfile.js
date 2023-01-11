
import {  useState } from "react";



const UpdateProfile = () => {

    const [ firstname, setFirstName ] = useState("");
    const [lastname, setLastName] = useState(""); 
    const [ gender, setGender ] = useState("");
    const [cohort, setCohort] = useState("");
    const [ birthday, setBirthday] = useState("");
    const [profession, setProfession] = useState("");
    const [ avatar, setAvatar ] = useState("");
    
  
    function handleSubmit(e) {
        
        
        e.preventDefault()

        console.log(firstname, lastname, gender, cohort, birthday, profession, avatar); 
        
        setFirstName("");
        setLastName("");
        setGender("");
        setBirthday("");
        setCohort("");
        setProfession("");
        setAvatar("");

    
    }
    return (
        <section className="min-h-full">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
        
            <label>
                First Name 
            <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={firstname} 
                onChange={(e) => {
                    setFirstName(e.target.value)
                    }}
                    placeholder="Enter your first name"/> 
                </label>
                
                <label>
                Last Name
            <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={lastname} 
                onChange={(e) => {
                    setLastName(e.target.value)
                    }}
                    placeholder="Enter your last name "/> 
                </label>
                
                <label>
                Gender
            <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={gender} 
                onChange={(e) => {
                    setGender(e.target.value)
                    }}
                    placeholder="Please specify your gender"/> 
                </label>
                
                <label>
                Cohort
            <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={cohort} 
                onChange={(e) => {
                    setCohort(e.target.value)
                    }}
                    placeholder="Enter your cohort"/> 
                </label>
                
                <label>
                Birthday 
            <input type="date" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={birthday} 
                onChange={(e) => {
                    setBirthday(e.target.value)
                    }}
                    placeholder="Input your birthday"/> 
            </label>

            <label>
                Profession 
                <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={profession} 
                onChange={(e) => {
                    setProfession(e.target.value)
                    }}
                    placeholder="ie .UI/UX designer, Front-end Devloper"/>
                </label>
                
                <label>
                Avatar
                <input type="text" 
                className="text-black p-2 m-2 border rounded-lg w-6/12" 
                value={avatar} 
                onChange={(e) => {
                    setAvatar(e.target.value)
                    }}
                   />
            </label>

            <input type="submit" value="Update"className='rounded text-red-500 hover:text-slate-200'/>

        </form>

      
    </section>
    

     );
}
 
export default UpdateProfile;

// import { useState } from "react";
// import { Link } from 'react-router-dom';

// function SignUp(){
   
//     const [ username, setUsername ] = useState("");
//     const [ password, setPassword ] = useState(""); 
  
//     function handleSubmit(e){
//         e.preventDefault()

//         console.log(username, password); 
//     }

//     return(
//         <section className="min-h-full">
//             <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3">
//                 <label>
//                     Username 
//                 <input type="text" 
//                     className="text-black p-2 m-2 border rounded-lg w-6/12" 
//                     value={username} 
//                     onChange={(e) => {
//                         setUsername(e.target.value)
//                         }}
//                         placeholder="Pick a username"/> 
//                 </label>

//                 <label>
//                     Password 
//                     <input type="password" 
//                     className="text-black p-2 m-2 border rounded-lg w-6/12" 
//                     value={password} 
//                     onChange={(e) => {
//                         setPassword(e.target.value)
//                         }}
//                         placeholder="Enter Password (minimum 4 characters)"/>
//                 </label>

//                 <input type="submit" className='rounded text-red-500 hover:text-slate-200'/>

//             </form>

//             <div className="flex justify-center gap-5">
//                 <h3> Have an Account? <Link to='/login' className="text-red-500"> Log In </Link> </h3>
//                 <h3> <Link to='/home'>Return To Home</Link> </h3>
//             </div>
//         </section>
//     )
// }

// export default SignUp;