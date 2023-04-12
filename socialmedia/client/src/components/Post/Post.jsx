import { IoIosPersonAdd } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUsersContext } from "../../Context";

const Post = ({ posts }) => {
const {user} = useUsersContext();
const handleLike = (_id) => {
  

}
  return (
    <>
      {posts?.posts?.map((post) => {
        const { _id, photo, title, likes, comments } = post;
        return (
          <div className="post-container" key={post._id}>
            <Link to={`/me/post/${_id}`}>
              <div className="image-add-container">
                <div>
                  <img src={photo} alt={"abel"} />
                  <h3>{`${"abel"}${"Tekle"}`}</h3>
                </div>
                <IoIosPersonAdd className="add-me" />
              </div>
            </Link>
            <div className="picture-post-name-container">
              <p>{title}</p>
              <img src={photo} alt={title} />
            </div>
            <div className="like-comment-container">
              <div className="likes">
                <AiFillLike />
                <p>{likes.length}</p>
              </div>
              <div className="comment">
                <BiComment />
                <p>{comments.length}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Post;
