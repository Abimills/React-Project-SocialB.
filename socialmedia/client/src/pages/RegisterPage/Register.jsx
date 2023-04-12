import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUsersContext } from "../../Context";
import useFetch from "../../hooks/useFetch";
import "./register.css";

const Register = () => {
  const { dispatch } = useUsersContext();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [job, setJob] = useState("");
  const [placeOfResidence, setPlaceOfResidence] = useState("");
  const [twitterAccount, setTwitterAccount] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  // const [allUsers, setAllUsers] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (
        email &&
        password &&
        firstName &&
        lastName &&
        job &&
        placeOfResidence &&
        twitterAccount &&
        passwordAgain
      ) {
        dispatch({ type: "LOGIN_START" });
        const res = await fetch(`http://localhost:8080/api/v1/auth/register/`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            email: email,
            job: job,
            placeOfResidence: placeOfResidence,
            twitterAccount: twitterAccount,
            password: password,
          }),
        });
        const data = await res.json();

        console.log(data);
      } else {
        console.log("please fill all fields");
      }
    } catch (error) {
      console.log(error);
      dispatch({ type: "LOGIN_FAILURE", payload: error });
    }
  };

  return (
    <div className="login-containers">
      <h1 style={{ color: "white" }}> Welcome to SocialB.</h1>
      <div className="register-former-container">
        <h1 className="register-login-header"> Register</h1>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            className="register-email-name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            className="register-email-name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email"
            value={email}
            className="register-email-name"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Job"
            value={job}
            className="register-email-name"
            onChange={(e) => setJob(e.target.value)}
          />
          <input
            type="text"
            placeholder="Place Of Residence"
            value={placeOfResidence}
            className="register-email-name"
            onChange={(e) => setPlaceOfResidence(e.target.value)}
          />
          <input
            type="text"
            placeholder="Twitter Account"
            value={twitterAccount}
            className="register-email-name"
            onChange={(e) => setTwitterAccount(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            className="register-email-name"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password Again"
            value={passwordAgain}
            className="register-email-name"
            onChange={(e) => setPasswordAgain(e.target.value)}
          />

          <button type="submit" className="register-btn">
            Register
          </button>
        </form>
        <p>Login here</p>
      </div>
    </div>
  );
};

export default Register;
