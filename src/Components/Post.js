// A Single Post Page 

function Post( { post }){
    const { title, content, likes } = post 
    return(
        <>
            <div>
                <h2>{ title} </h2>
                <section>
                    {content}
                </section>
                <span>{likes}</span>
            </div>

        </>
    )
}


export default Post; 