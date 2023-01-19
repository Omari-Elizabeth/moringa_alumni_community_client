
import {  useState } from "react";
import Logo from "../img/formlogo.png"


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

        const profile ={
            firstname: firstname,
            lastname : lastname,
            gender : gender,
            cohort: cohort,
            birthday : birthday,
            profession: profession,
            avatar: avatar
        }
        console.log(profile)
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
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 border-solid border-white border-2 w-2/4 m-auto bg-cloud-burst-600 mt-2">
                <div className="m-auto ">
                <img src={Logo} alt="logo" className="border rounded-xl" width={100} height={100} />
                </div>
            
            <h1 className="text-xl  text-international-orange-600">UPDATE PROFILE</h1>
        
            <label className="text-white text-lg" >
                First Name 
            <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={firstname} 
                onChange={(e) => {
                    setFirstName(e.target.value)
                    }}
                    placeholder="Enter your first name"/> 
                </label>
                
                <label className="text-white text-lg">
                Last Name
            <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={lastname} 
                onChange={(e) => {
                    setLastName(e.target.value)
                    }}
                    placeholder="Enter your last name "/> 
                </label>
                
                <label className="text-white text-lg">
                Gender
            <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={gender} 
                onChange={(e) => {
                    setGender(e.target.value)
                    }}
                    placeholder="Male or Female"/> 
                </label>
                
                <label className="text-white text-lg">
                Cohort
            <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={cohort} 
                onChange={(e) => {
                    setCohort(e.target.value)
                    }}
                    placeholder="Enter your cohort"/> 
                </label>
                
                <label className="text-white text-lg">
                Birthday 
            <input type="date" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={birthday} 
                onChange={(e) => {
                    setBirthday(e.target.value)
                    }}
                    placeholder="Input your birthday"/> 
            </label>

            <label className="text-white text-lg">
                Profession 
                <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={profession} 
                onChange={(e) => {
                    setProfession(e.target.value)
                    }}
                    placeholder="ie .UI/UX designer, Front-end Devloper"/>
                </label>
                
                <label className="text-white text-lg">
                Avatar
                <input type="text" 
                className="text-black p-2 m-2 border rounded-3xl w-4/12" 
                value={avatar} 
                onChange={(e) => {
                    setAvatar(e.target.value)
                    }}
                   />
            </label>

            <input type="submit" value="UPDATE"className='rounded text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border rounded-3xl m-auto'/>

        </form>

      
    </section>
    

     );
}
 
export default UpdateProfile;