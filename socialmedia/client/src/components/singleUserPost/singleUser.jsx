import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Nav/Navbar";
import { useUsersContext } from "../../Context";
import { useState } from "react";
import UserInfo from "../../pages/Home/userInfo/userInfo";
import Post from "../Post/Post";
import UserTopInfo from "../../pages/Home/userInfo/userTopInfo";
import AdUser from "../Advertisement/Advertisement";
import FriendsList from "../../pages/Home/userInfo/friends";

const SingleUser = () => {
  const { id } = useParams();
  const { useFetch, darkMode } = useUsersContext();
  const [onePersonPosts, setOnePersonPosts] = useState([]);
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  // useFetch(`https://dummyapi.io/data/v1/user/${id}/post`, setOnePersonPosts);
  useFetch(`https://dummyapi.io/data/v1/user/${id}`, setUser);

  return (
    <div id={darkMode ? "" : "light"}>
      <Navbar />
      <div className="home-container">
        <UserInfo user={user} />
        <div className="poster-container">
          <UserTopInfo user={user} />
          <Post posts={onePersonPosts.data} />
        </div>
        <div className="friends-ad-container">
          <AdUser />
          <FriendsList />
        </div>
      </div>
    </div>
  );
};

export default SingleUser;
