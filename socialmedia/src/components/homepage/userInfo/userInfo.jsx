import React from 'react'

import { IoPersonAdd } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { useUsersContext } from '../../../Context'


const UserInfo = ({user}) => {
 
  if(!user){
    return(
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
  return (
    <div className='user-info-container'>
      <div className="image-name-container">
        <div className="profile-image">
          <div className="background-stand"></div>
        <img src={user.picture} alt={user.firstName} />
        </div>
        <div className="friends-name-container">
          <h3>{`${user.firstName} ${user.lastName}`} </h3>
        <p>2 friends</p>

        </div>
        <IoPersonAdd  className='add-person'/>
      </div>
        <hr className='horizontal-line'/>
      <div className="location-container">
        <div className="location-profile">
          <IoLocationOutline className='profile-icon' />
          <p>london</p>
        </div>
        <div className="location-profile">
          <MdWorkOutline className='profile-icon' />
          <p>developer</p>
        </div>

      </div>
      <hr className='horizontal-line' />
      <div className="impressions-container">
        
        <p className='watched'>who watched your profile : <span>{1034} </span></p>
        <p className='impressions'>impressions on your profile : <span>{334} </span></p>


      </div>
      <hr className='horizontal-line' />
      <div className="social-media-container">
       
        <div className="twitter">
          < AiOutlineTwitter  className='tweet'/>
          <div>

          <h4>twitter</h4>
          <p>sara@twitter.com</p>
          </div>
        </div>
        {/* <div className="linkedin">
          < AiFillLinkedin  className='tweet'/>
          <div>
          <h4>Linkedin</h4>
          <p>sara@likedin.com</p>
          </div>
        </div> */}

      </div>

      

    </div>
  )
}

export default UserInfo