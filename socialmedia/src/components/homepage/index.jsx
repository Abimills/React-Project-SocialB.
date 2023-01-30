import React from 'react'
import Navbar from '../navbar'
import UserInfo from './userInfo/userInfo'
import UserTopInfo from './userInfo/userTopInfo';
import Post from '../post/post';
import AdUser from '../advertisement/adUser';
import { useEffect } from 'react';
import { useState } from 'react'
import FriendsList from './userInfo/friends';

const HomePage = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetcher = async () => {
            try {
                setLoading(true)
                const res = await fetch('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca', {
                    method: 'GET',
                    headers: {
                        'App-id': '63d5ace9058c286096e661e4',

                    },
                });
                const data = await res.json();
                setUser(data)
                setLoading(false)

            } catch (err) {
                console.log(err);
                setLoading(false)

            }
        }
        fetcher();

    }, [])
   
  return (
    <>
        <Navbar  name={user.firstName}/>
    <div className='home-container'>
        <UserInfo  user={user}/>
        <div className="poster-container">
        <UserTopInfo  user={user}/>
        <Post  />

        </div>
        <div className='friends-ad-container'>

         <AdUser />
         <FriendsList  />
        </div>
    </div>
    </>
  )
}

export default HomePage