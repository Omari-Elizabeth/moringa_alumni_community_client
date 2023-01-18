// Posts List, will display all posts 
import { useEffect, useState  } from 'react'; 
import Post from './Post';

function PostList(){
    const [ posts, setPosts ] = useState([]); 

    console.log(posts); 

   useEffect(() => {
    fetch('/posts')
    .then(r => r.json())
    .then(d => {
        // console.log(d)
        setPosts(d);
    })
   },[]); 

    return(
        <div className='flex flex-col p-2 gap-3'>
            {
                posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })
            }

        </div>

    )
}

export default PostList; 