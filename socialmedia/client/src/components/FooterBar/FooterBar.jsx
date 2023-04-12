import React from "react";
import "../../pages/Home/home.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-item">
          <div>
            <Link
              to="/"
              className="footer-logo"
              style={{ textDecoration: "none" }}
            >
              <p className="name-comapny">SocialB.</p>
            </Link>
          </div>
          <div>
            <p>Find interesting people</p>
          </div>

          <div className="social-icon">
            <a
              href="https://www.instegram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram className="social_icon_item" />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter className="social_icon_item" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookSquare className="social_icon_item" />
            </a>
          </div>
        </div>

        <div className="footer-resource">
          <ul>
            <li className="caption">Resources</li>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/login">
              <li>Login</li>
            </Link>
            <Link to="/register">
              <li>Register</li>
            </Link>
            <Link to="/about">
              <li>About us</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
