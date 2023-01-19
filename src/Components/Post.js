// A Single Post Page 

import { Link } from "react-router-dom"; 
import { FaCommentAlt , FaHeart } from "react-icons/fa"; 
import { useState } from "react"; 

function Post( { post }){
     
    const { id, title, content, likes, comments , image , user  } = post ; 

    const [ hideForm , setHideForm ] = useState(true); 
    const [ newComment, setNewComment ] = useState(""); 

    const login_token = localStorage.getItem("login_token");
    const user_id = localStorage.getItem("user_id");

    console.log(login_token , "<= this is the login_token"); 
    console.log(user_id, "<= this is the user_id"); 
   
    function postCommentToDb(e){
        e.preventDefault(); 

        const sendData = {
            post_id : id, 
            user_id : user_id, 
            comment_msg : newComment
        }

        console.log(sendData, "<= this is the Data sent "); 

        fetch(`/comments`,{
            method : 'POST', 
            "Content-Type" : "application/json",
            Authorize : `Bearer ${login_token}`,
            body : JSON.stringify(sendData)
        })
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => {
            console.log(e) 
            console.log(e.errors)
            console.log(e.error)
        });

        setHideForm(true); 
        setNewComment("");
   }
   

    return(
            <section className="flex flex-col items-left text-left p-3">
                    <div className="grid gap-4 ">
                    <h2 className="font-bold text-2xl">{ title} By <span className="text-red-600">{user.username} </span></h2>
                    <img src={image} alt="" className="object-cover border rounded-lg"/>   
                        <section>
                            {content}
                        </section>
                        <h5 className="flex gap-1 text-red-600 hover:text-blue-700"> {likes} <FaHeart />, {comments.length} <FaCommentAlt />  </h5> 
                       
                        <button className="w-1/5" onClick={() => setHideForm(false)}>
                            Add Comment
                        </button>

                        <form hidden={hideForm} onSubmit={postCommentToDb}>
                            <input type="text" placeholder="Write Your Comment Here" value={newComment} onChange={(e) => setNewComment(e.target.value)}/>
                            <input type="submit" />
                        </form>
                        
                        <Link to={`/posts/${id}`}>
                        <span className="italic font-semibold hover:text-blue-700"> View Post </span>
                    </Link>
                    </div>

                </section>
    )
}


export default Post; 