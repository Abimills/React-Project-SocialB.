import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUsersContext } from "../../Context";
import useFetch from "../../hooks/useFetch";
import Navbar from "../../components/Nav/Navbar";

const Login = () => {
  const { dispatch } = useUsersContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // const [allUsers, setAllUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (email && password) {
        dispatch({ type: "LOGIN_START" });
        const res = await fetch(`http://localhost:8080/api/v1/auth/login/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });
        const data = await res.json();

        console.log(data);
        if (data) {
          dispatch({ type: "LOGIN_SUCCESSFUL", payload: data.user });
          navigate("/me", window.scrollTo(0, 0));
        } else {
          dispatch({ type: "LOGIN_FAILURE", payload: data.error });
        }
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };

  return (
    <>
    <Navbar />
    <div className="login-containers">
      <h1 style={{ color: "white" }}> Welcome to SocialB.</h1>
      <div className="former-container">
        <h1 className="login-header"> Login</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="email-name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="email-name"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="submit-to-login-btn">
            Log In
          </button>
        </form>
        <p>Register here</p>
      </div>
    </div>
    </>
  );
};

export default Login;
