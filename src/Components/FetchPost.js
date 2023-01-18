// Display Post With Comments After it is clicked From The MainAlum Page 

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SinglePostPage(){

    let postId = useParams(); 

    const [ post , setPost ] = useState({}); 

    const { title, content, likes, comments , image } = post ; 

    console.log(comments); 

    useEffect(() => {

        fetch(`/posts/${postId.id}`)
        .then(r => r.json()
        .then(d => { 
            setPost(d)
        }))

    },[postId.id])

    return(
        <section className="bg-slate-300 min-h-screen text-black leading-4 font-mono p-5 justify-items-start">
            <button className=" bg-yellow-400 p-2 border rounded-lg hover:bg-slate-500 hover:text-white">
                <Link to="/alum_home" className="p-5 m-5">Back To Home </Link>
            </button>
            <div >
                <section className="flex flex-col items-center text-left p-3">
                <div className="grid gap-4 ">
                        <h2 className="font-bold">{ title} </h2>
                        <img src={image} alt="" className="object-cover border rounded-lg h-96"/>   
                            <section>
                                {content}
                            </section>
                            {/* <h5> {likes} likes , {comments.length} comments</h5>  */}
                        </div>

                        </section>
            </div>
        </section>
    )
}

export default SinglePostPage; 