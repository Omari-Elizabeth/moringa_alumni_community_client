// Admin Side Navigation, Should not be accessible to users who are
// Not Admins

import { Link } from "react-router-dom"; 

function AdminNavigation(){

    return(    
        <div>
            <Link to="/admindashboard/announcements">AdminAnnouncementsDashboard</Link>
            <Link to="/admindashboard/users">AdminUsersDashboard</Link>
            <Link to="/admindashboard/posts">AdminPostsDashboard</Link>
        </div>
    )
}

export default AdminNavigation; 