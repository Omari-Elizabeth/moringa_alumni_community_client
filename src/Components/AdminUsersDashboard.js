import { useEffect, useState } from "react";
function AdminUsersDashboard() {
  const [users, setUsers] = useState([]);
  const [deleteuser, setDeleteUser] = useState(false);
  let apiUrl = "/users";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        // console.log(jsonfile);
        setUsers(jsonfile);
      });
  }, [apiUrl, deleteuser]);

  function deleteUser(id) {
    // console.log(id);
    fetch(`/users/${id}`, {
      method: `DELETE`,
    })
    .then((result) => {
      result.json().then((resp) => {
        setUsers(resp);
        console.log(id);
        setDeleteUser(true);
      });
    });
  }
  function updateUser(id) {
    console.log(id)
    fetch(`/users/${id}`, {
      method: `PATCH`,
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  }
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
        <div className="absolute inset-y-0 right-20">
          <h1 className="font-bold text-2xl">Users</h1> <br />
          <br />
          <table className="bg-[#242747] border-collapse:collapse;">
            <thead>
              <tr className="bg-[#242747]">
                <th className="border p-2 ">User ID</th>
                <th className="border p-2 ">Username</th>
                <th className="border p-2">Cohort</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            {users.map((user, i) => {
              return (
                <tbody key={i} value={user}>
                  <tr key={i} value={user}>
                    <td className="border p-2">{user.id}</td>
                    <td className="border p-2">{user.username}</td>
                    <td className="border p-2">{user.profile.cohort}</td>
                    <td className="border p-2 space-x-4">
                      <button
                        title="Delete"
                        data-toggle="tooltip"
                        onClick={() => deleteUser(`${user.id}`)}
                        className="text-blue-600 bg-red-500 rounded-full  p-2 "
                      >
                        Delete
                      </button>

                      <button
                        title="Delete"
                        data-toggle="tooltip"
                        onClick={() => updateUser(user.id)}
                        className="text-blue-600 bg-green-500 rounded-full p-2"
                      >
                        Update
                      </button>
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

export default AdminUsersDashboard;
