function AdminAnnouncementsDashboard() {
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
              <a href="/admindashboard/announcements">
                Announcements
              </a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute inset-y-0 right-20">
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
            <tbody>
              <tr>
                <td className="border ">1</td>
                <td className="border  p-2 ">Alamed Fines</td>
                <td className="border  p-2">
                  The career Path is hard to get to its peak without support
                </td>
                <td className="border  p-2">
                  <a href="saf.com" className="text-blue-600">
                    Delete
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default AdminAnnouncementsDashboard;