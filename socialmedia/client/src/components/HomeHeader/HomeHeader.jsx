import React from "react";
import "../../pages/Home/home.css";
import girlPic from "../../assets/pictures/girl.png";
import girlTrip from "../../assets/pictures/girl-trips.png";
const HomeHeader = () => {
  return (
    <div className="new-landing-page">
      <div className="text-image-home-container">
        <div className="people-discover-div">
          <div className="home-first-div">
            <p className="connect-people-para">
              connect with your folks and share your days
            </p>
            <h1 className="home-header-text">
              Discover <span style={{ color: "aqua" }}>People </span>
              <span style={{ color: "aqua" }}>@ </span>
            </h1>
          </div>
          <h1 className="experience-love-header">
            Experience Your <span style={{ color: "aqua" }}>love </span>
            ones
          </h1>
          <p className="home-paragraph-text">
            Welcome to my Facebook page! Here, you'll find a glimpse into my
            life and interests. I love connecting with friends, family, and new
            people, so feel free to send me a message or add me as a friend.
            From travel adventures to foodie finds and everything in between, I
            can't wait to share my experiences with you. Thank you for stopping
            by and I look forward to connecting with you!
          </p>
          <button className="create-account">create an account</button>
        </div>
        <div className="image-home-container">
          <img src={girlTrip} alt="" className="guy-home-pic" />
          <img src={girlPic} alt="" className="girl-home-pic" />
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
