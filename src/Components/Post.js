// A Single Post Page 

import { Link } from "react-router-dom"; 

function Post( { post }){
     
    const { id, title, content, likes, comments , image } = post ; 

    return(
        <Link to={`/posts/${id}`}>
            <section className="flex flex-col items-center text-left p-3">
                    <div className="grid gap-4 h-80 w-80 object-cover rounded-lg ">
                    <h2 className="font-bold">{ title} </h2>
                    <img src={image} alt=""/>
                        
                        <section>
                            {content}
                        </section>

                        <span> {likes} likes</span>
                        <span> {comments.length} comments </span>    
                    
                    </div>

                </section>
        </Link>
    )
}


export default Post; 