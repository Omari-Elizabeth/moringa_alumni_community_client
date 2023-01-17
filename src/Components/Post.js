// A Single Post Page 

function Post( { post }){
     
    const { title, content, likes, comments } = post ; 

    console.log(comments)

    return(
        <section className="">
            <div className="grid grid-row-3 gap-4">
                <h2>{ title} </h2>
                <section>
                    {content}
                </section>
                <span> {likes} likes</span>

                <section>
                </section>
            </div>

        </section>
    )
}


export default Post; 