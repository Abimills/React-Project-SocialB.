import React from 'react'
import { useState,useEffect } from 'react';
import { IoPersonRemove } from 'react-icons/io5'

const FriendsList = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetcher = async () => {
            try {
                setLoading(true)
                const res = await fetch('https://dummyapi.io/data/v1/user', {
                    method: 'GET',
                    headers: {
                        'App-id': '63d5ace9058c286096e661e4',

                    },
                });
                const data = await res.json();
                setUsers(data.data)
                setLoading(false)

            } catch (err) {
                console.log(err);
                setLoading(false)

            }
        }
        fetcher();

    }, [])
    let newUser =[];
    if(users) {
        newUser= users.filter((data,index) => index  >= 4 && index <= 7)
       
    }
    console.log(newUser);
   

   



    
    
  return (

    <div className='friend-containers'>
        <h1>Friend List</h1>
        {
            newUser && newUser.map(user => {
                const {picture,firstName,lastName} = user;

                return (
                    <div className="individual-friend" key={user.id}>
                        <div className="name-place">
                            <div className='pic-names-container'>
                                <img src={picture} alt={firstName} />
                                <h5>{`${firstName} ${lastName} `}</h5>
                            </div>
                        </div>
                        < IoPersonRemove  className='remove-icon'/>
                    </div>


                )
            })

            
            
            }
        
    </div>
  )
}

export default FriendsList