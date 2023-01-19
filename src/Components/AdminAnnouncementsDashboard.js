
import { useState, useEffect } from "react";

import Popup from "reactjs-popup";
import AddForm from "./AddAnnouncementForm";
function AdminAnnouncementsDashboard() {
  const [announcements, setAnnouncements] = useState([]);
  const [change, setChange] = useState(false);
  const apiUrl = "/announcements";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setAnnouncements(jsonfile);
      });
  }, [apiUrl, change]);

  return (
    <>
      <div className="flex">
        <aside className="w-30 fixed left-0 top-0 h-screen bg-[#242772] p-10">
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
        </aside>
        <div className="w-1/2 ml-96">
          <h1 className="font-bold text-2xl text-blue-500">Announcements</h1>{" "}
          <Popup
            trigger={
              <button className="bg-[#FF731D] rounded-lg text-white  font-bold p-1 hover:bg-cyan-600 float-right ">
                Add +
              </button>
            }
          >
            <div>
              <AddForm setChange={setChange} />
            </div>
          </Popup>
          <br />
          {announcements.map((announcements, i) => {
            return (
              <div key={i} className="bg-[#242747] p-8">
                <h2 className="text-blue-500 bg-white">
                  {announcements.title}
                </h2>
                <p>{announcements.content}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AdminAnnouncementsDashboard;
