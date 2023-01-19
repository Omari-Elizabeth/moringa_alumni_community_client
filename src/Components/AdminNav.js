// Admin Side Navigation, Should not be accessible to users who are
// Not Admins

import { Link } from "react-router-dom"; 

function AdminNavigation(){

    return(    
        <div className="flex gap-3 bg-[#242747] justify-center items-center">
            <Link to="/admin_announcements" className="hover:bg-orange-600 hover:text-[#242747] p-1">AdminAnnouncementsDashboard</Link>
            <Link to="/admindashboard/users" className="hover:bg-orange-600 hover:text-[#242747] p-1">AdminUsersDashboard</Link>
            <Link to="/admindashboard/posts" className="hover:bg-orange-600 hover:text-[#242747] p-1">AdminPostsDashboard</Link>
        </div>
    )
}

export default AdminNavigation; 