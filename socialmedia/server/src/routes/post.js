import express from "express";
import {
  getPosts,
  createPost,
  getSinglePost,
  deletePost,
  addLike,
  addComment,
  getPersonPosts,
} from "../controllers/post.js";

const router = express.Router();

router.post("/create", createPost);
router.post("/like", addLike);
router.post("/comment", addComment);
router.get("/personal-post/:id", getPersonPosts);
router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.delete("/:id", deletePost);

export default router;
