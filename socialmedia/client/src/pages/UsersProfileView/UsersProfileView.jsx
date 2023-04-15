import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import "../Home/home.css";
import Navbar from "../../components/Nav/Navbar";
import UserInfo from "../Home/userInfo/userInfo";
import UserTopInfo from "../Home/userInfo/userTopInfo";
import Post from "../../components/Post/Post";
import AdUser from "../../components/Advertisement/Advertisement";
import FriendsList from "../Home/userInfo/friends";
import FriendsProfile from "../Home/userInfo/FriendsProfile";
import OtherFriendsFriends from "../Home/userInfo/OtherFriendsFriends";

const UsersProfileView = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const { id } = useParams();
  const [otherUser, setOtherUser] = useState([]);
  const [friends, setFriends] = useState(user.friends || []);
  const [personPosts, setPersonPosts] = useState([]);

  //   other user information ============================
  const {
    data: otherPersonData,
    error: otherPersonError,
    loading: otherPersonLoading,
  } = useFetch(`http://localhost:8080/api/v1/auth/user/${id}`);

  useEffect(() => {
    if (otherPersonData) {
      setOtherUser(otherPersonData);
    }
  }, [otherPersonData]);
  //   ================================

  //   fetch other user all posts =================
  const {
    data: postData,
    error: postError,
    loading: PostLoading,
  } = useFetch(`http://localhost:8080/api/v1/post/personal-post/${id}`);
  useEffect(() => {
    if (postData) {
      setPersonPosts(postData);
    }
  }, [postData]);
  //   =========================================

  console.log(otherPersonData);

  return (
    <div>
      <Navbar />
      <div className="home-container">
        <FriendsProfile otherUser={otherUser && otherUser.user} />
        <div className="poster-container">
          {/* <UserTopInfo user={user} /> */}
          {postData ? (
            <>
              <h1 className="user-name-personal-post">
                {otherPersonData?.user?.firstName}'s Posts
              </h1>
              <Post posts={postData && postData} />
            </>
          ) : (
            <h1>{otherPersonData?.user?.firstName} has not posted yet...</h1>
          )}
        </div>
        <div className="friends-ad-container">
          <AdUser />
          <OtherFriendsFriends user={otherUser?.user} />
        </div>
      </div>
    </div>
  );
};

export default UsersProfileView;
