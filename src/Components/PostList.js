// Posts List, will display all posts 
import { useEffect, useState  } from 'react'; 
import Post from './Post';

function AddNewPost(){
    const [ postContent, setPostContent ] = useState(""); 
    const [ postTitle, setPostTitle ] = useState("")
    const [ postImage, setPostImage ] = useState(null);

    const user_id = localStorage.getItem("user_id"); 
    const login_token = localStorage.getItem("login_token"); 

    const postData = {
        title : postTitle, 
        likes : 0, 
        content : postContent, 
        user_id : user_id,
        image : postImage
    }

    function postNewToDb(e){
        e.preventDefault()

        console.log(postData);
        
        fetch("/posts", {
            method : 'POST', 
            headers : { "Content-Type" : "application/json"},
            Authorize : `Bearer ${login_token}`,
            body : JSON.stringify(postData)
        })
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e))

    }

    return(
        <div className="w-full p-3">
            <h1 className='text-xl font-bold'>Add New Post </h1>
            <form className='flex flex-col mb-2 w-full gap-4' onSubmit={postNewToDb}>
                 <input type="text" placeholder='Post Title' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className="p-2 border rounded-md"/>
                 <input type="textarea" placeholder="Post Content" value={postContent} onChange={(e) => setPostContent(e.target.value)} className="p-2 border rounded-md"/>
                <input type="file" onChange={(e) => setPostImage(e.target.image[0])}/>
                <input type="submit"/>
            </form>
        </div>
    )
}

function PostList(){
    const [ posts, setPosts ] = useState([]); 

   useEffect(() => {
    fetch('/posts')
    .then(r => r.json())
    .then(d => {
        setPosts(d);
    })
   },[]); 

    return(
        <div className='divide-y-4 divide-emerald-500 pr-12'>
        <AddNewPost />
            {
                posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })
            }

        </div>

    )
}

export default PostList; 