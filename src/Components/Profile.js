// Profile Page 

function Profile( { user }){
   
    const { fname, lname, gender, cohort, profession , avatar  } = user.profile;

    return(
        <div className="text-left">
            <h2>Profile</h2>
            <div>
                <img src={avatar} alt="" />
            </div>
                <h3>{fname}</h3>
                <h3>{lname}</h3>
                <h4>{gender}</h4>
                <h4>{cohort}</h4>
                <h4>{profession}</h4>
            </div>
    )
}

export default Profile; 