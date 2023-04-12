import React from "react";
import "../../pages/Home/home.css";
import girlPic from "../../assets/pictures/girl.png";
import people from "../../assets/pictures/people.png";
const HomeMiddle = () => {
  return (
    <div className="new-landing-page">
      <div className="text-image-home-container">
        <div className="people-discover-div">
          <div className="home-first-div">
            <p className="connect-people-para">
              It feel good to see the people you love!
            </p>
            <h1 className="home-header-text">
              Watch <span style={{ color: "aqua" }}>Now </span>
              <span style={{ color: "aqua" }}> </span>
            </h1>
          </div>
          <h1 className="experience-love-header">
            Your Loved ones <span style={{ color: "aqua" }}>moment </span>
          </h1>
        </div>
        <div className="image-home-container">
          <img src={people} alt="" className="people-home-pic" />
          
        </div>
      </div>
    </div>
  );
};

export default HomeMiddle;
