import React from "react";
import { useState } from "react";
import Navbar from "../Nav/Navbar";
import Footer from "../FooterBar/FooterBar";
import useFetch from "../../hooks/useFetch";
import { useUsersContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import "./createPost.css";
const url = "http://localhost:8080/api/v1/post/create";
const CreatePost = () => {
  const { user } = useUsersContext();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (title && photo) {
        setLoading(true);
        const res = await fetch(url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            userId: user._id,
            title: title,
            photo: photo,
          }),
        });
        const data = await res.json();
        setLoading(false);
        if (data) {
          console.log(data);
          navigate("/me");
        }
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <>
      <Navbar />
      <div className="post-make-container">
            <h1 className="let-people-know">Let people know What you been up to</h1>
        <form className="create-post-form" onSubmit={handleSubmit}>
          <input
            type="text"
            value={title}
            placeholder="Title"
            name={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            value={photo}
            placeholder="photo"
            name={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <div className="post-btn-container">
          <button type="submit">Post</button>

          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default CreatePost;
