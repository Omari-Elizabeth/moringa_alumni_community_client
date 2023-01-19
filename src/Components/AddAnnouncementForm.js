import { useState } from "react";
function AddAnnouncementForm({ setChange }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData()

    formData.append("title", title)
    formData.append("content", content)
    formData.append("announcement_image", e.target.image.files[0])


    fetch("/announcements", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
       
      })
      .catch((err) => {
        console.log(err.message);
      });
      setChange(true)
      setContent('');
      setTitle('');
   
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="p-10 bg-[#242747]">
        <h1 className="text-orange-500 p-5">Add Announcement</h1>
        <label className="text-white center p-10">Title</label>
        <input
          // id="title"
          type="text"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          placeholder="Enter Title"
        />
        <br />
        <label className="text-white p-10 py-10">Content </label>
        <textarea
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          placeholder="Enter Announcement"
        />

        <br />

        <label className="text-white text-right">Image URl</label>
        <input
          type="file"
          id="image"
        />
        <br />
        <br />
        <button type="submit" className="bg-[#FF731D] font-bold ml-20  w-20 text-white hover:bg-cyan-600">

          Add
        </button>
      </form>
    </>
  );
}
export default AddAnnouncementForm;