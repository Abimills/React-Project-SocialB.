import express from "express";
import {
  login,
  register,
  getUsers,
  getUser,
  addFriends,
  getFriends,
} from "../controllers/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allUsers", getUsers);
router.get("/user/:id", getUser);
router.post("/addFriend", addFriends);
router.post("/find/friends", getFriends);

export default router;
