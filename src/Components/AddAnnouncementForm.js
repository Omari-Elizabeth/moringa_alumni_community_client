// // Login Page
import { useState } from "react";
import React from "react";
// import { Link } from "react-router-dom";
// import
function AddAnnouncementForm() {
  const [announcement, setAnnouncement] = useState({
    title: "",
    content: "",
    imageurl: "",
  });
  function handleChange(e) {
    e.preventDefault();
    setAnnouncement({
      ...announcement,
      [e.target.title]: e.target.value,
      [e.target.content]: e.target.value,
      [e.target.imageurl]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(announcement);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 bg-[#242747]">
        <h1 className="text-orange-500">Add Announcement</h1>
        <label className="text-white center">Title </label>
        <input
          type="text"
          value={announcement.title}
          onChange={(e) => setAnnouncement(e.target.value)}
          placeholder="Enter Title"
        />

        <label className="text-white">Content </label>
        <input
          type="textarea"
          value={announcement.content}
          onChange={handleChange}
          placeholder="Enter Announcement"
        />

        <label className="text-white">Image URl</label>
        <input
          type="text"
          value={announcement.imageurl}
          onChange={handleChange}
          placeholder="url"
        />

        <button className="bg-[#FF731D] text-white hover:bg-cyan-600">
          Add
        </button>
      </form>
    </>
  );
}
export default AddAnnouncementForm;
