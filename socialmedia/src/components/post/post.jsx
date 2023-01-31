
import { IoIosPersonAdd } from 'react-icons/io'
import { AiFillLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {
    
    if(!posts){
        return (
            <div>
                Loading...
            </div>
        )

    }
   
    return (
        <>
        {
            posts && posts.map(post => {
        const {image,likes,owner:{id,firstName,lastName, picture,},text} = post;
           return <div className='post-container' key={post.id}>
            <Link to={`/user/${id}/post`} >
        <div className="image-add-container">
            <div>
            <img src={picture} alt={firstName}/>
            <h3>{`${firstName }${lastName}`}</h3>
            </div>
            <IoIosPersonAdd className='add-me'/>
        </div>
            </Link>
        <div className="picture-post-name-container">
            <p>{text}</p>
            <img src={image}alt={text} />
        </div>
        <div className="like-comment-container">
            <div className="likes">
                   <AiFillLike />
                   <p>{likes}</p>
            </div>
            <div className='comment'>

                   <BiComment />
                   <p>0</p>
            </div>

        </div>
    </div>
        })
}
        </>

)}




export default Post;