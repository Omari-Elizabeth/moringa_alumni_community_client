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

    useEffect(() => {
        fetch('/announcements')
        .then(r => r.json())
        .then(d => {
            console.log(d)
            setAnnouncements(d)
        }); 
    },[])

    return(
        <div>
            {displayAnnouncements}
        </div>
    )
}

export default AnnouncementList; 