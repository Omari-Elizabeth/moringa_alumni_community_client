// Posts List, will display all posts 
import { useEffect, useState  } from 'react'; 
import Post from './Post';

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
            {
                posts.map((post) => {
                    return <Post post={post} key={post.id} />
                })
            }

        </div>

    )
}

export default PostList; 