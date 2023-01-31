import React from 'react'
import { useState } from 'react';
import { IoPersonRemove } from 'react-icons/io5'
import { useUsersContext } from '../../../Context';

const FriendsList = () => {
    const {useFetch} = useUsersContext();

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useFetch('https://dummyapi.io/data/v1/user',setUsers)

    
    let newUser =[];
    if(!users.data){
        return(
            <div>
                <h1>Loading...</h1>
            </div>
        )
    }
    if(users.data) {
        newUser= users.data.filter((data,index) => index  >= 4 && index <= 7)
       
    }

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