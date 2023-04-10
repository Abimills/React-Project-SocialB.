import app from "./app.js";
import dotenv from "dotenv";
import express from "express";
import connectDb from "./db/connectDb.js";

dotenv.config();

const port = process.env.PORT || 4000;

const startServer = () => {
  app.listen(port, (err) => {
    connectDb();
    if (err) console.log(err);
    console.log(`Server is running on port ${port}`);
  });
};

startServer();
