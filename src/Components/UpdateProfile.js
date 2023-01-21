
import { useState } from "react";
import Logo from "../img/formlogo.png"
import { Link, Redirect } from "react-router-dom";


const UpdateProfile = () => {
    // updated
    const [profile, setProfile] = useState({});
    const [avatar, setAvatar] = useState(null);
    const userId = localStorage.getItem("user_id");
    const token = localStorage.getItem("login_token")
    console.log(localStorage.getItem("login_token"));
    console.log(userId)

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault()
        setErrors([]);

        try {

        const formData = new FormData()
        formData.append("user_id", userId)
        formData.append("fname", profile.fname)
        formData.append("lname", profile.lname)
        formData.append("gender", profile.gender)
        formData.append("cohort", profile.cohort)
        formData.append("birthday", profile.birthday)
        formData.append("profession", profile.profession)
        formData.append("avatar", avatar)

        // formData.append("avatar", e.target.image.files[0])

        const response = await fetch("/profiles", {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`
            },
            body: formData
        });

        const data = await response.json();
            if (response.status === 201) {
                console.log(data)
                alert("Profile updated successfully, Click home button to view your account")
            } else {
                console.log("Ahh kuna kashida mahali")
            }
        } 
          catch(error) {
            console.error(error);
        }
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
                    // id="user_id"

                    />
                </label>
                <label className="text-white text-lg" >
                    First Name
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="fname"
                        value={profile.fname}
                        onChange={e => setProfile({ ...profile, fname: e.target.value })}
                        placeholder="Enter your first name" />
                </label>

                <label className="text-white text-lg">
                    Last Name
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="lname"
                        onChange={e => setProfile({ ...profile, lname: e.target.value })}
                        placeholder="Enter your last name " />
                </label>

                <label className="text-white text-lg">
                    Gender
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="gender"
                        onChange={e => setProfile({ ...profile, gender: e.target.value })}
                        placeholder="Male or Female" />
                </label>

                <label className="text-white text-lg">
                    Cohort
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="cohort"
                        onChange={e => setProfile({ ...profile, cohort: e.target.value })}
                        placeholder="must include sd or ds" />
                </label>

                <label className="text-white text-lg">
                    Birthday
                    <input type="date"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="birthday"
                        onChange={e => setProfile({ ...profile, birthday: e.target.value })}
                        placeholder="Input your birthday" />
                </label>

                <label className="text-white text-lg">
                    Profession
                    <input type="text"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="profession"
                        onChange={e => setProfile({ ...profile, profession: e.target.value })}
                        placeholder="ie .UI/UX designer, Front-end Devloper" />
                </label>

                <label className="text-white text-lg">
                    Profile photo
                    <input type="file"
                        className="text-black p-2 m-2 border rounded-3xl w-4/12"
                        name="avatar"
                        // id="image"
                        onChange={e => setAvatar(e.target.files[0])}
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