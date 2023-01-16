// import Popup from "reactjs-popup";
// import AddForm from "./AddAnnouncementForm";
import { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import AddForm from "./AddAnnouncementForm";
function AdminAnnouncementsDashboard() {
  const [announcements, setAnnouncements] = useState([]);
  let apiUrl = "/announcements";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setAnnouncements(jsonfile);
      });
  }, [apiUrl]);

  return (
    <>
      <div className="relative h-screen w-60 bg-[#242772]">
        <h2 className="text-sky-50">Admin Dashboard</h2>
        <div>
          <br />
          <br />
          <br />
        </div>
        <div className="h-96 ">
          <div className="absolute  left-0 text-center pl-6  ">
            <p className="text-orange-600 hover:text-sky-50 ">
              <a href="/admindashboard/users">Users</a>
            </p>
            <p className="text-orange-600 hover:text-sky-50">
              <a href="/admindashboard/posts">Posts</a>
            </p>
            <p className="text-orange-600 hover:text-sky-50">
              <a href="/admindashboard/announcements">Announcements</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute inset-y-0 right-20">
          <h1 className="font-bold text-2xl">Announcements</h1>{" "}
          <Popup
            trigger={
              <button className="bg-[#FF731D] text-white   p-1 hover:bg-cyan-600 float-right inline-block ">
                Add +
              </button>
            }
            position="right center"
          >
            <div>
              <AddForm />
            </div>
          </Popup>
          <br />
          <br />
          <table className="border-collapse:collapse;">
            <thead>
              <tr className="bg-blue-150">
                <th className="border p-2 ">ID</th>
                <th className="border p-2 ">Title</th>
                <th className="border  p-2">Content</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            {announcements.map((announcements, i) => {
              return (
                <tbody>
                  <tr value={announcements}>
                    <td className="border  p-2 ">{announcements.id}</td>
                    <td className="border  p-2 ">{announcements.title}</td>
                    <td className="border  p-2 ">{announcements.content}</td>
                    <td className="border  p-2 ">
                      <a href="saf.com" className="text-blue-600">
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>



  {/* return (
    <>
       {announcements} */}
    </>
  );
}

export default AdminAnnouncementsDashboard;
