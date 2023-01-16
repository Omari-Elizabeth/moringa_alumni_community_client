// import Popup from "reactjs-popup";
// import AddForm from "./AddAnnouncementForm";


function AdminAnnouncementsDashboard( { announcements } ) {
  
  const announcementsList = announcements.map((announcement ) => {
    const { content, id , title } = announcement ; 
    return (
        <div key={id}>
            <h2>{title}</h2>
            <section>
              {content}
            </section>
        </div>
    )
  })

  return (
    <>
       {announcementsList}
    </>
  );
}

export default AdminAnnouncementsDashboard;
