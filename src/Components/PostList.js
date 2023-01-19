// Posts List, will display all posts 
import { useEffect, useState  } from 'react'; 
import Post from './Post';

function AddNewPost(){
    const [ postContent, setPostContent ] = useState(""); 
    const [ postTitle, setPostTitle ] = useState("")

    const user_id = localStorage.getItem("user_id"); 
    const login_token = localStorage.getItem("login_token"); 


    function postNewToDb(e){
        e.preventDefault()

        const formData = new FormData(); 

        formData.append("title", postTitle)
        formData.append('content', postContent)
        formData.append('likes', 0)
        formData.append('user_id', user_id)
        formData.append("image", e.target.image.files[0])

        
        fetch("/posts", {
            method : 'POST', 
            Authorize : `Bearer ${login_token}`,
            body : formData
        })
        .then(r => r.json())
        .then(d => console.log(d))
        .catch(e => console.log(e))

        setPostContent("");
        setPostTitle("");

        console.log(e.target.image.files)
        e.target.image.files = null ;

    }

    return(
        <div className="w-full p-3">
            <h1 className='text-xl font-bold'>Add New Post </h1>
            <form className='flex flex-col mb-2 w-full gap-4' onSubmit={postNewToDb}>
                 <input type="text" placeholder='Post Title' value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className="p-2 border rounded-md"/>
                 <input type="textarea" placeholder="Post Content" value={postContent} onChange={(e) => setPostContent(e.target.value)} className="p-2 border rounded-md"/>
                <input type="file"  id="image" accept="image/png , image/jpeg, image/jpg"/>
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