// Admin Side Navigation, Should not be accessible to users who are
// Not Admins

import { Link } from "react-router-dom"; 

function AdminNavigation(){

    return(    
        <div className="grid grid-cols-1 md:flex gap-10 justify-center items-center font-bold  ">
            <Link to="/admin_announcements" className="  bg-[#242747] hover:bg-international-orange-600 hover:text-white w-full md:w-96 p-28 border rounded-2xl " style={{ height: "40vh" }}>AdminAnnouncementsDashboard</Link>
            <Link to="/admindashboard/users" className="  bg-[#242747] hover:bg-international-orange-600 hover:text-white w-full md:w-96 p-28 border rounded-2xl" style={{ height: "40vh" }}>AdminUsersDashboard</Link>
            <Link to="/admindashboard/posts" className="  bg-[#242747] hover:bg-international-orange-600 hover:text-white w-full md:w-96 p-28 border rounded-2xl" style={{ height: "40vh" }}>AdminPostsDashboard</Link>
        </div>
    )
}

export default AdminNavigation; 