import React, { useEffect, useState } from "react";
import Navbar from "../../components/Nav/Navbar";
import UserInfo from "./userInfo/userInfo";
import UserTopInfo from "./userInfo/userTopInfo";
import Post from "../../components/Post/Post";
import AdUser from "../../components/Advertisement/Advertisement";
import FriendsList from "./userInfo/friends";
import { useUsersContext } from "../../Context";
import useFetch from "../../hooks/useFetch";

import "./home.css";
import HomeHeader from "../../components/HomeHeader/HomeHeader";
import HomeMiddle from "../../components/HomeMiddle.jsx/HomeMiddle";
import HomeLower from "../../HomeLower/HomeLower";
import Footer from "../../components/FooterBar/FooterBar";
const HomePage = () => {
  const { darkMode } = useUsersContext();

  return (
    <div id={darkMode ? "" : "light"}>
      <Navbar />
      <HomeHeader />
      <HomeMiddle />
      <HomeLower />
      <Footer />
    </div>
  );
};

export default HomePage;
