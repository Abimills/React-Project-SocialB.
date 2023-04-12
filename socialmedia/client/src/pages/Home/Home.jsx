import React, { useEffect, useState } from "react";
import Navbar from "../../components/Nav/Navbar";
import UserInfo from "./userInfo/userInfo";
import UserTopInfo from "./userInfo/userTopInfo";
import Post from "../../components/Post/Post";
import AdUser from "../../components/Advertisement/Advertisement";
import FriendsList from "./userInfo/friends";
import { useUsersContext } from "../../Context";
import useFetch from "../../hooks/useFetch";

const HomePage = () => {
  const { user, posts, darkMode } = useUsersContext();
  const [allPosts, setAllPosts] = useState([]);
  const { data, error, loading } = useFetch(
    `http://localhost:8080/api/v1/post`
  );
  useEffect(() => {
    if (data) {
      setAllPosts(data);
    }
  }, [data]);
  console.log("hey there")
  return (
    <div id={darkMode ? "" : "light"}>
      <Navbar />
      <div className="home-container">
        <UserInfo user={user} />
        <div className="poster-container">
          <UserTopInfo user={user} />
          <Post posts={allPosts} />
        </div>
        <div className="friends-ad-container">
          <AdUser />
          {/* <FriendsList /> */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
