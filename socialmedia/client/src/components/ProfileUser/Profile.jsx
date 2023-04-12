import React from 'react'
import Navbar from '../Nav/Navbar'
import UserInfo from '../../pages/Home/userInfo/userInfo'
import UserTopInfo from '../../pages/Home/userInfo/userTopInfo'
import Post from '../Post/Post'
import AdUser from '../Advertisement/Advertisement'
import FriendsList from '../../pages/Home/userInfo/friends'
import { useState } from 'react'
import useFetch from '../../hooks/useFetch'
import { useUsersContext } from '../../Context'
import { useEffect } from 'react'

const Profile = () => {
       const { user, darkMode } = useUsersContext();
       const [allPosts, setAllPosts] = useState([]);
       const { data, error, loading } = useFetch(
         `http://localhost:8080/api/v1/post`
       );
       useEffect(() => {
         if (data) {
           setAllPosts(data);
         }
       }, [data]);
  return (
      <>
      {loading && (<div><h1>Loading...</h1></div>)}
      {error && (<div><h1>{error}</h1></div>)}
    <div id={darkMode ? "" : "light"}>
      <Navbar />
      {user && (
        <div className="home-container">
          <UserInfo user={user} />
          <div className="poster-container">
            <UserTopInfo user={user} />
            <Post posts={allPosts} />
          </div>
          <div className="friends-ad-container">
            <AdUser />
            {/* <FriendsList/> */}
          </div>
        </div>
      )}
        </div>

        </>
  )
}

export default Profile