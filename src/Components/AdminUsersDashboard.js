import { useEffect, useState } from "react";
function AdminUsersDashboard() {
  const [users, setUsers] = useState([]);
  let apiUrl = "/users";
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((jsonfile) => {
        console.log(jsonfile);
        setUsers(jsonfile);
      });
  }, [apiUrl, users]);

  function deleteUser(id) {
    console.log(id);
    fetch(`/users/${id}`, {
      method: `DELETE`,
    }).then((result) => {
      result.json().then((resp) => {
        console.log(users);
        setUsers(resp);
        console.log(id);
      });
    });
  }

  return (
    <>
      <div className="grid grid-cols-1 md:flex">
        <aside className=" md:w-30 fixed left-0 top-0 h-screen bg-[#272747] p-10">
          <h2 className="text-white font-bold text-2xl p-3 border rounded-2xl">
            <a href="/admin_home">Admin Dashboard</a>
          </h2>
          <div>
            <br />
            <br />
            <br />
          </div>
          <div className="h-96 ">
            <div className="absolute text-center pl-12  ">
              <p className="text-orange-600  text-xl font-bold hover:text-sky-50 hover:bg-orange-600 bg-white  border rounded-xl p-3">
                <a href="/admindashboard/users">Users</a>
              </p><br></br>
              <p className="text-orange-600 text-xl font-bold  hover:text-sky-50 hover:bg-orange-600 bg-white  border rounded-xl p-3 ">
                <a href="/admindashboard/posts">Posts</a>
              </p><br></br>
              <p className="text-orange-600 text-xl font-bold  hover:text-sky-50 hover:bg-orange-600 bg-white  border rounded-xl p-3 ">
                <a href="/admindashboard/announcements">Announcements</a>
              </p>
            </div>
          </div>
        </aside>
        <div>
          <div className="w-3/4 ml-96 ">
            <h1 className="font-bold text-black text-2xl mt-7">USERS</h1> <br />
            <br />
            <table className="bg-[#242747] border-spacing-2 border-separate">
              <thead>
                <tr className="bg-[#242747]">
                  <th className="border p-7 text-white ">User ID</th>
                  <th className="border p-7 text-white">User Name</th>
                  <th className="border p-7 text-white">Full Name</th>
                  <th className="border p-7 text-white">Profession</th>
                  <th className="border p-7 text-white">Cohort</th>
                  <th className="border p-7 text-white">Action</th>
                </tr>
              </thead>
              {users.map((user, i) => {
                console.log(user.profile);
                return (
                  <tbody key={i} value={user}>
                    <tr key={i} value={user}>
                      <td className="border p-7">{user.id}</td>
                      <td className="border p-7">{user.username}</td>

                      <td className="border p-7">
                        {user.profile
                          ? `${user.profile.fname} ${user.profile.lname}`
                          : "No Profile"}
                      </td>

                      <td className="border p-7">
                        {user.profile
                          ? `${user.profile.profession} `
                          : "No Profile"}
                      </td>
                      <td className="border p-7">
                        {user.profile
                          ? `${user.profile.cohort} `
                          : "No Profile"}
                      </td>
                      <td className="border p-7 space-x-4">
                        <button
                          title="Delete"
                          data-toggle="tooltip"
                          onClick={() => deleteUser(user.id)}
                          className="text-white bg-orange-600 rounded-full  p-2 "
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
export default AdminUsersDashboard;
