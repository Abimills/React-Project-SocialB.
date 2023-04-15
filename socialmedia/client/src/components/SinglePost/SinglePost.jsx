import { IoIosPersonAdd } from "react-icons/io";
import { AiFillLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useUsersContext } from "../../Context";
import { useState } from "react";
import "../../pages/Home/home.css";

const SinglePost = ({ post }) => {
  const { user } = useUsersContext();
  const [likes, setLikes] = useState(post.likes || []);
  const [comments, setComments] = useState(post.comments || []);
  const [loading, setLoading] = useState(false);
  const [turnOn, setTurnOn] = useState(false);
  const [newComment, setNewComment] = useState("");
  console.log(post);
  const handleAddComment = async (e) => {
    e.preventDefault();
    try {
      if (newComment) {
        setLoading(true);
        const res = await fetch("http://localhost:8080/api/v1/post/comment", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            _id: post._id,
            userId: user._id,
            userName: user.firstName,
            userPhoto: user.photo,
            comment: newComment,
          }),
        });
        const data = await res.json();
        setLoading(false);
        if (data) {
          setComments(data.comments);
          setNewComment("");
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  const handleAddRemoveLike = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/api/v1/post/like", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          _id: post._id,
          userId: user._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data) setLikes(data.likes);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="post-container" key={post._id}>
      <Link to={`/me/post/${post?.userId}`}>
        <div className="image-add-container">
          <div>
            <img src={post.userPhoto} alt={"abel"} />
            <h3>{`${post?.userName}`}</h3>
          </div>
          <IoIosPersonAdd className="add-me" />
        </div>
      </Link>
      <div className="picture-post-name-container">
        <p>{post.title}</p>
        <img src={post.photo} alt={post.title} />
      </div>
      <div className="like-comment-container">
        <div className="likes">
          <AiFillLike onClick={handleAddRemoveLike} />
          <p>{likes?.length}</p>
        </div>
        <div className="comment">
          <BiComment onClick={() => setTurnOn(!turnOn)} />
          <p>{comments?.length}</p>
        </div>

        {turnOn && (
          <div className="comment-area-container">
            <form onSubmit={handleAddComment}>
              <input
                type="text"
                placeholder="Write a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default SinglePost;
