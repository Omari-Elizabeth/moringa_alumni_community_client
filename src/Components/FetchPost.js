// Display Post With Comments After it is clicked From The MainAlum Page 

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function SinglePostPage(){

    const [ postComments, setPostComments ] = useState([]);
    const [ newComm , setNewComm ] = useState(""); 
    const [ hideCommentForm , setHideCommentForm ] = useState(true); 

    let postId = useParams(); 

    const [ post , setPost ] = useState({}); 

    const { title, content, likes, image } = post ; 

    useEffect(() => {

        fetch(`/posts/${postId.id}`)
        .then(r => r.json()
        .then(d => { 
            setPost(d)
            setPostComments(d.comments); 
        }))

    },[postId.id])

    return(
        <section className="bg-slate-300 min-h-screen text-black leading-4 font-mono p-5 items-start">
            <button className=" bg-red-600 p-2 border rounded-lg hover:bg-slate-500 hover:text-white">
                <Link to="/alum_home" className="p-5 m-5">Back To Home </Link>
            </button>

            <div >
                <section className="flex flex-col items-center text-left p-3 gap-5">
                
                    <div className="grid gap-4 ">
                    <h2 className="font-bold text-2xl">{title} </h2>
                            <img src={image} alt="" className="object-cover border rounded-lg h-96 w-full"/>   
                                <section>
                                    {content}
                                </section>
                                <h5> {likes} likes , {postComments.length} comments</h5> 
                            </div>

                        <section className="flex flex-col gap-4 divide-y-4 divide-emerald-700">
                            {postComments.map((comment => {
                                return(
                                    <article key={comment.id} className="p-2">
                                        <p>
                                            {comment.comment_msg}
                                        </p>
                                    </article>
                                )
                            }))}
                        </section>

                        </section>
            </div>
        </section>
    )
}

export default SinglePostPage;