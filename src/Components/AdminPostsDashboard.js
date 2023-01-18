import { useEffect, useState } from "react";
function AdminAnnouncementsDashboard() {
  const [posts, setPosts] = useState([]);
  const apiUrl = "/posts";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        setPosts(jsonfile);
      });
  }, [apiUrl]);
  function handleDelete(id) {
    // e.preventDefault();
    fetch(`/posts/${id}`, {
      method: "DELETE",
    })
      .then((resp) => resp.json())
      .then((res) => console.log(res));
  }
  return (
    <>
      <div className="flex">
        {/* <div>
          <a href="/admin_home">
            <button className="border rounded-lg p-1 font-bold border-slate-800 bg-red-700 hover:bg-slate-500 hover:text-white">
              Back
            </button>
          </a>
        </div> */}
        <aside className="w-44 fixed left-0 top-0 h-screen bg-[#242747] p-10">
          <h2 className="text-sky-50">Admin Dashboard</h2>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div className="h-96 ">
            <div className="absolute  left-0 w-20 text-center pl-12  ">
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
        <div>
          <div className="w-1/2 ml-96 ">
            <h1 className="font-bold text-2xl">Posts</h1> <br />
            <br />
            {posts.map((post, i) => {
              return (
                <div
                  className="bg-[#242747] mb-10 p-5 space-y-4 rounded-lg"
                  key={i}
                >
                  {/* {console.log(post.id)} */}
                  <h2 className="font-bold">{post.user.username}</h2>
                  <button
                    onClick={handleDelete(post.id)}
                    className="bg-red-600 p-1 rounded-full float-right mt- space-x-2"
                  >
                    {/* Delete */}X
                  </button>
                  <h2 className=" text-blue-500 text-left">{post.title}</h2>{" "}
                  <img
                    className="place-content-center"
                    src={post.image}
                    // width={500}
                    // height={500}
                    alt={post.title}
                  />
                  <p>{post.content}</p>
                  <p>
                    {post.likes}Likes </p>
                    {/* <svg src="src/img/like-svgrepo-com.svg" /> */}
                </div>
                // src/img/like-svgrepo-com.svg
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminAnnouncementsDashboard;