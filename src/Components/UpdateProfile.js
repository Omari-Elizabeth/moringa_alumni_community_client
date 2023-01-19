
import { useState } from "react";
import Logo from "../img/formlogo.png"
import { Link, Redirect } from "react-router-dom";


const UpdateProfile = () => {
    const userId = localStorage.getItem("user_id");
    console.log(localStorage.getItem("login_token"));
    // console.log(user_id)
    const [fname, setFName] = useState("");
    const [lname, setLName] = useState("");
    const [gender, setGender] = useState("");
    const [cohort, setCohort] = useState("");
    const [birthday, setBirthday] = useState("");
    const [profession, setProfession] = useState("");
    const [user_id, setUserid] = useState(userId)
    console.log(user_id)

    const [errors, setErrors] = useState([]);

    function handleSubmit(e) {

        e.preventDefault()
        setErrors([]);
        const formData = new FormData()
        formData.append("fname", fname)
        formData.append("lname", lname)
        formData.append("gender", gender)
        formData.append("cohort", cohort)
        formData.append("birthday", birthday)
        formData.append("profession", profession)
        formData.append("user_id", user_id)
        formData.append("avatar", e.target.image.files[0])


        fetch("/profiles", {
            method: "POST",
            body: formData,
        })

            .then(r => {
                if (r.ok) {
                    r.json().then((d) => {
                        console.log(d, "<= everything returned from the server")

                        alert("Profile successfully updated ")
                        return <Redirect to="/alum_home" />

                    })
                } else {
                    r.json().then((e) => {
                        console.log(e.errors.length)
                        let allErrors = e.errors
                        for (let i = 0; i < allErrors.length; i++) {
                            console.log(allErrors[i])
                        setErrors(errors => [...errors, allErrors[i]])
                           
                        }
                    })
                }
            })
        setFName("")
        setLName("")
        setGender("")
        setCohort("")
        setBirthday("")
        setProfession("")


    }
    return (
        <section className="min-h-full">

            <form onSubmit={handleSubmit} className="flex flex-col gap-3 p-3 border-solid border-white border-2 w-2/4 m-auto bg-cloud-burst-600 mt-2">
                <div className="m-auto ">
                    <img src={Logo} alt="logo" className="border rounded-xl" width={100} height={100} />
                </div>

                <h1 className="text-xl  text-international-orange-600">UPDATE PROFILE</h1>

                <label className="text-white text-lg" >
                    User Id
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        value={userId}
                        id="user_id"

                    />
                </label>
                <label className="text-white text-lg" >
                    First Name
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setFName(e.target.value)
                        }}
                        placeholder="Enter your first name" />
                </label>

                <label className="text-white text-lg">
                    Last Name
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setLName(e.target.value)
                        }}
                        placeholder="Enter your last name " />
                </label>

                <label className="text-white text-lg">
                    Gender
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setGender(e.target.value)
                        }}
                        placeholder="Male or Female" />
                </label>

                <label className="text-white text-lg">
                    Cohort
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setCohort(e.target.value)
                        }}
                        placeholder="must include sd or ds" />
                </label>

                <label className="text-white text-lg">
                    Birthday
                    <input type="date"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setBirthday(e.target.value)
                        }}
                        placeholder="Input your birthday" />
                </label>

                <label className="text-white text-lg">
                    Profession
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        onChange={(e) => {
                            setProfession(e.target.value)
                        }}
                        placeholder="ie .UI/UX designer, Front-end Devloper" />
                </label>

                <label className="text-white text-lg">
                    Profile photo
                    <input type="file"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        id="image"

                    />
                </label>

                <input type="submit" value="UPDATE" className='rounded text-white hover:bg-cloud-burst-600  bg-international-orange-600 hover:text-white w-40 p-3 border rounded-3xl m-auto' />
                <Link to="/alum_home">Home</Link>

                <div className="text-red-600 font-bold text-xl p-3">
                    {errors.length > 0 && (
                        <div>
                            {errors.map((error, index) => (
                                <p key={index}>{`* ${error}`}</p>
                            ))}
                        </div>
                    )}

                </div>
            </form>


        </section>


    );
}

export default UpdateProfile;