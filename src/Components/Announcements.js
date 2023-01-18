import { useEffect, useState } from 'react'

function AnnouncementList(){
    const [ announcements, setAnnouncements ] = useState([]); 

    const displayAnnouncements = announcements.map((ann) => {
        const { title, id, content  } = ann 

        return (
            <div key={id}>
                <h2>{title}</h2>
                <section>
                    {content}
                </section>
            </div>
        )
    } )

    function NoAnnouncements(){
        return(
            <div>
                <h1> No Announcements !</h1>
            </div>
        )
    }

    function AllAnnouncements(){
        return(
            <div>
                <h1>Announcements : </h1>
                <section>
                    {displayAnnouncements}
                </section>
            </div>
        )
    }

    useEffect(() => {
        fetch('/announcements')
        .then(r => r.json())
        .then(d => {
            console.log(d)
            setAnnouncements(d)
        }); 
    },[])

    return(
        <div className='min-h-screen'>
            {announcements.length <= 0 ? <NoAnnouncements /> :  <AllAnnouncements /> }
        </div>
    )
}

export default AnnouncementList; 