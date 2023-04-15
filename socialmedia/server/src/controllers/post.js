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
// get all posts
export const getPersonPosts = async (req, res) => {
  const { id } = req.params;
  try {
    
    const posts = await Post.find({ userId: id });
    if (!posts) {
      res.status(404).json({ success: false, message: "Posts not found" });
    }
    res.status(200).json({
      success: true,
      counts: posts.length,
      message: "Successfully fetched related posts",
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
// add a like functionality
export const addLike = async (req, res) => {
  const { _id, userId } = req.body;
  try {
    const post = await Post.findById(_id);
    if (!post) {
      res.status(404).json({ success: false, message: "post not found" });
    }
    const found = post.likes.find((like) => like == userId);
    if (!found) {
      await Post.updateOne({ _id: _id }, { $push: { likes: userId } });
      const newPost = await Post.findById(_id);

      res.status(200).json({
        success: true,
        message: "added a like",
        likes: newPost.likes,
      });
    } else {
      await Post.updateOne({ _id: _id }, { $pull: { likes: userId } });
      const newPost = await Post.findById(_id);
      res.status(200).json({
        success: true,
        message: "removed a like",
        likes: newPost.likes,
      });
    }
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
// Add comment
export const addComment = async (req, res) => {
  const { _id, userId, userName, userPhoto, comment } = req.body;
  try {
    await Post.updateOne(
      { _id: _id },
      { $push: { comments: { userId, userName, userPhoto, comment } } }
    );
    const newPost = await Post.findById(_id);
    res.status(200).json({
      success: true,
      message: "added a comments",
      comments: newPost.comments,
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
