import express from "express";
import { login, register,getUsers } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/allUsers", getUsers);

export default router;
