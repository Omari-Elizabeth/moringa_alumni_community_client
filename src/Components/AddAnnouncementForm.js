import { useState } from "react";

function AddAnnouncementForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [url, setUrl] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const announcement = {
      title: title,
      content: content,
      imageurl: url,
    };

    console.log(announcement);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="p-6 bg-[#242747]">
        <h1 className="text-orange-500">Add Announcement</h1>
        <label className="text-white center">Title </label>
        <input
          type="text"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter Title"
        />

        <label className="text-white">Content </label>
        <input
          type="textarea"
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter Announcement"
        />

        <label className="text-white">Image URl</label>
        <input
          type="text"
          onChange={(e) => setUrl(e.target.value)}
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
