// A Single Post Page 

function Post( { post }){
     
    const { title, content, likes, comments , image } = post ; 

    console.log(comments)

    return(
        <section className="flex flex-col items-center text-left">
            <div className="grid gap-4 h-80 w-80 object-cover rounded-lg ">
            <img src={image} alt=""/>
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