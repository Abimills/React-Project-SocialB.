import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    photo: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userPhoto: {
      type: String,
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
    likes: {
      type: [String],
      default: [],
    },
    comments: {
      type: [Object],
      default: [],
    },
   
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
