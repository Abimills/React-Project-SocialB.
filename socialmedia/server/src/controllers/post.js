import Post from "../Models/Post.js";

// get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    if (!posts) {
      res.status(404).json({ success: false, message: "Posts not found" });
    }
    res.status(200).json({
      success: true,
      counts: posts.length,
      message: "Successfully fetched all posts",
      posts: posts,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// get single post
export const getSinglePost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ success: false, message: "Post not found" });
    }
    res.status(200).json({
      success: true,
      message: "Successful",
      post: post,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// create post
export const createPost = async (req, res) => {
  const postData = req.body;
  // validate req.body if i have time
  try {
    const newPost = await Post.create(postData);

    res.status(200).json({
      success: true,
      message: "Successfully created",
      post: newPost,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// create post
export const addLike = async (req, res) => {
  const {_id, userId} = req.body;
  // validate req.body if i have time
  try {
    const newPost = await Post.create(postData);

    res.status(200).json({
      success: true,
      message: "Successfully created",
      post: newPost,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// delete post
export const deletePost = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      res.status(404).json({
        success: false,
        message: "Post not found or is already deleted.",
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Successfully deleted post",
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
