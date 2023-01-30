import React,{useState,useEffect} from 'react'
import { IoIosPersonAdd } from 'react-icons/io'
import { AiFillLike } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
const Post = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetcher = async () => {
            try {
                setLoading(true)
                const res = await fetch('https://dummyapi.io/data/v1/post', {
                    method: 'GET',
                    headers: {
                        'App-id': '63d5ace9058c286096e661e4',

                    },
                });
                const data = await res.json();
                setPosts(data.data)
                setLoading(false)

            } catch (err) {
                console.log(err);
                setLoading(false)

            }
        }
        fetcher();

    }, [])
    console.log(posts);
    if(loading){
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
        const {id,image,likes,owner:{firstName,lastName, picture,},text} = post;
           return <div className='post-container' key={id}>
        <div className="image-add-container">
            <div>
            <img src={picture} alt={firstName}/>
            <h3>{`${firstName }${lastName}`}</h3>
            </div>
            
            <IoIosPersonAdd className='add-me'/>

        </div>
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

)

}




export default Post