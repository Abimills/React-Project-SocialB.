import express from "express";
import cors from "cors";
import postRoute from "./routes/post.js";
import adsRoute from "./routes/ads.js";
import authRoute from "./routes/auth.js";

// start the server
const app = express();

// use json with middleware
app.use(express.json());

// allow everyone to have access to our api / not practical in real applications
app.use(cors());

// post route
app.use("/api/v1/post", postRoute);
// ads route
app.use("/api/v1/ads", adsRoute);
// auth route
app.use("/api/v1/auth", authRoute);

export default app;
