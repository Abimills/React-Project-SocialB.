import React from 'react'
import Navbar from '../navbar'
import UserInfo from './userInfo/userInfo'
import UserTopInfo from './userInfo/userTopInfo';
import Post from '../post/post';
import AdUser from '../advertisement/adUser';
import FriendsList from './userInfo/friends';
import { useUsersContext } from '../../Context';

const HomePage = () => {
    const { posts,user,darkMode,setDarkMode } = useUsersContext();
    
   
  return (
    <div id={darkMode ? '' : 'light'}>
        <Navbar  />
    <div className='home-container'>
        <UserInfo  user={user}/>
        <div className="poster-container">
        <UserTopInfo  user={user}/>
        <Post posts={posts} />

        </div>
        <div className='friends-ad-container'>

         <AdUser />
         <FriendsList  />
        </div>
    </div>
    </div>
  )
}

export default HomePage;