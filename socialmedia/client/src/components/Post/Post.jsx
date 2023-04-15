import SinglePost from "../SinglePost/SinglePost";

const Post = ({ posts }) => {
  return (
    <>
      {posts?.posts?.map((post) => {
        return <SinglePost key={post._id} post={post} />;
      })}
    </>
  );
};

export default Post;
