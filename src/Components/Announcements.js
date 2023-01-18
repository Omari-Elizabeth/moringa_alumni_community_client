import { useEffect, useState } from 'react'

function AnnouncementList(){
    const [ announcements, setAnnouncements ] = useState([]); 

    const displayAnnouncements = announcements.map((ann) => {
        const { title, id, content  } = ann 

        return (
            <div key={id} className="p-3">
                <h2 className='text-xl font-semibold'>{title}</h2>
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
            <div className='p-3'>
                <h1 className='text-3xl font-bold text-red-600 text-center'>Announcements </h1>
                <section className='divide-y-4 divide-emerald-500'>
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
        <div className='bg-slate-700 text-slate-300 border rounded-md'>
            {announcements.length <= 0 ? <NoAnnouncements /> :  <AllAnnouncements /> }
        </div>
    )
}

export default AnnouncementList; 