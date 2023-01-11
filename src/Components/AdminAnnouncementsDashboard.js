import Popup from "reactjs-popup";
import AddForm from "./AddAnnouncementForm";
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
              <a href="/adminusersdashboard/users">Users</a>
            </p>
            <p className="text-orange-600 hover:text-sky-50">
              <a href="/adminpostsdashboard/posts">Posts</a>
            </p>
            <p className="text-orange-600 hover:text-sky-50">
              <a href="/adminannouncementsdashboard/announcements">Announcements</a>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="absolute inset-y-0 right-20">
          <h1 className="fond-bold text-2xl">Announcements</h1>{" "}
          {/* <button className="bg-[#FF731D] text-white   p-1 hover:bg-cyan-600 float-right inline-block ">
            {"Add +"}
          </button> */} 
          <Popup
            trigger={
              <button className="bg-[#FF731D] text-white   p-1 hover:bg-cyan-600 float-right inline-block ">
                {" "}
                Add +
              </button>
            }
            position="right center"
          >
            <div>
              <AddForm />
            </div>
          </Popup>
          <br />
          <br />
          <table className="border-collapse:collapse;">
            <thead>
              <tr className="bg-blue-50">
                <th className="border p-2 ">ID</th>
                <th className="border p-2 ">Title</th>
                <th className="border  p-2">Content</th>
                <th className="border p-2 ">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border ">1</td>
                <td className="border  p-2 ">The distant Search</td>
                <td className="border  p-2">
                  The career Path is hard to get to its peak without support
                </td>
                <td className="border  p-2">
                  <a href="saf.com" className="text-blue-600">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border  ">2</td>
                <td className="border  ">The distant Search</td>
                <td className="border  ">
                  The career Path is hard to get to its peak without support.
                </td>
                <td className="border  ">
                  <a href="saf.com" className="text-blue-600">
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border  ">3</td>
                <td className="border  ">The distant Search</td>
                <td className="border  ">
                  The career Path is hard to get to its peak without support.
                </td>
                <td className="border  ">
                  <a
                    href="saf.com"
                    className="text-blue-600 active:bg-indigo-500,underline"
                  >
                    Delete
                  </a>
                </td>
              </tr>
              <tr>
                <td className="border  ">4</td>
                <td className="border  ">The distant Search</td>
                <td className="border  ">
                  The career Path is hard to get to its peak without support.
                </td>
                <td className="border  ">
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
