// A Single Post Page 

import { Link } from "react-router-dom"; 

function Post( { post }){
     
    const { id, title, content, likes, comments , image } = post ; 

    return(
            <section className="flex flex-col items-center text-left p-3">
                    <div className="grid gap-4 ">
                    <h2 className="font-bold text-2xl">{ title} </h2>
                    <img src={image} alt="" className="object-cover border rounded-lg"/>   
                        <section>
                            {content}
                        </section>
                        <h5> {likes} likes, {comments.length} comments  </h5> 
                        <Link to={`/posts/${id}`}>
                        <span className="italic font-semibold hover:text-blue-700"> View Post </span>
                    </Link>
                    </div>

                </section>
    )
}


export default Post; 