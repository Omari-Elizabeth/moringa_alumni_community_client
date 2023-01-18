// Display Post With Comments After it is clicked From The MainAlum Page 

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SinglePostPage(){

    let postId = useParams(); 

    const [ post , setPost ] = useState({}); 

    const { title, content, likes, comments , image } = post ; 

    useEffect(() => {

        fetch(`/posts/${postId.id}`)
        .then(r => r.json()
        .then(d => { 
            setPost(d)
        }))

    }, [postId.id])

    return(
        <div className="bg-slate-600 min-h-screen text-slate-100 leading-4 font-mono">
            <section className="flex flex-col items-center text-left p-3">
                    <div className="grid gap-4 h-80 w-80 object-cover rounded-lg ">
                    <h2 className="font-bold">{ title} </h2>
                    <img src={image} alt=""/>
                        
                        <section>
                            {content}
                        </section>

                        <span> {likes} likes</span>
                      
                    </div>
                    </section>
            <Link to="/alum_home">Back To Home </Link>
        </div>
    )
}

export default SinglePostPage; 