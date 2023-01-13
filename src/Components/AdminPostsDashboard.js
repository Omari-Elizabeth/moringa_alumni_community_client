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
      </div>
      <div>
        <div className="w-1/2 absolute top-0 left-45 right-20">
          <h1 className="font-bold text-2xl">Posts</h1> <br />
          <br />
          <table className="border-collapse:collapse;">
            <thead>
              <tr className="bg-blue-50">
                <th className="border p-2 ">Post ID</th>
                <th className="border p-2 ">Username</th>
                <th className="border p-2">Content</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            {posts.map((post, i) => {
              return (
                <tbody key={i} value={post}>
                  <tr key={i} value={post}>
                    <td className="border ">{post.id}</td>
                    <td className="border  p-2 ">{post.title}</td>
                    <td className="border">{post.content}</td>
                    <td className="border  p-2">
                      <button className="text-blue-600">Delete</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminAnnouncementsDashboard;
