import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../navbar';
import { useUsersContext } from '../../Context';
import { useState } from 'react';
import UserInfo from '../homepage/userInfo/userInfo';
import Post from '../post/post';
import UserTopInfo from '../homepage/userInfo/userTopInfo';
import AdUser from '../advertisement/adUser';
import FriendsList from '../homepage/userInfo/friends';


const SingleUser = () => {
    const {id} = useParams();
    const {useFetch,darkMode} = useUsersContext();
    const [onePersonPosts,setOnePersonPosts] =useState([]);
    const [user,setUser] =useState([]);
    const [loading,setLoading] =useState(true);
   

        useFetch(`https://dummyapi.io/data/v1/user/${id}/post`,setOnePersonPosts);
        useFetch(`https://dummyapi.io/data/v1/user/${id}`,setUser);
   
   

    

  return (
    <div id={darkMode ? '' : 'light'}>
       <Navbar  />
    <div className='home-container'>
        <UserInfo  user={user}/>
        <div className="poster-container">
        <UserTopInfo  user={user}/>
        <Post posts={onePersonPosts.data} />

        </div>
        <div className='friends-ad-container'>

         <AdUser />
         <FriendsList  />
        </div>
    </div>
    </div>
  )
}

export default SingleUser;
