import express from "express";
import { getPosts, createPost, getSinglePost, deletePost } from "../controllers/post.js";

const router = express.Router();

router.post("/create", createPost);
router.post("/like", createPost);
router.get("/", getPosts);
router.get("/:id", getSinglePost);
router.delete("/:id", deletePost);

export default router;
