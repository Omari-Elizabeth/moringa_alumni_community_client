
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

  function handleDelete(id) {
    console.log(id, "test");
    fetch(`/announcements/${id}`, {
      method: "DELETE",
    })
      .then((result) => {
        result.json();
      })
      .then((resp) => {
    
        setChange(true);
      });
    setChange(true);
  }

  return (
    <>
      <div className="flex">
        <aside className="w-30 fixed left-0 top-0 h-screen bg-[#272747] p-10">
          <h2 className="text-sky-50"><a href="/admin_home">
            Admin Dashboard
            </a></h2>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div className="h-96 ">
            <div className="absolute  left-0 text-center pl-6  ">
              <p className="text-orange-600 hover:bg-orange-600 hover:text-sky-50 ">
                <a href="/admindashboard/users">Users</a>
              </p>
              <p className="text-orange-600 hover:bg-orange-600  hover:text-sky-50">
                <a href="/admindashboard/posts">Posts</a>
              </p>
              <p className="text-orange-600 hover:bg-orange-600  hover:text-sky-50">
                <a href="/admindashboard/announcements">Announcements</a>
              </p>
            </div>
          </div>
        </aside>
        <div className="w-1/2 ml-96">
          <h1 className="font-bold text-2xl text-blue-500">Announcements</h1>{" "}
          <Popup
            trigger={
              <button className="absolute bg-[#FF731D] rounded-lg text-white  font-bold p-1 hover:bg-cyan-600 top-5 right-20">
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
              <div key={i} className="bg-[#272747] mb-10 p-5 space-y-4 rounded-lg">
                 <button
                    onClick={() => handleDelete(announcements.id)}
                    className="bg-red-600 p-1 rounded-lg float-right mt-0 space-x-2"
                  >
                    Delete
                  </button>
                <h2 className="text-orange-600 font-bold mb-10">
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
