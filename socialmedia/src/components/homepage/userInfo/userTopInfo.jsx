import React from 'react'
import { BsCardImage } from 'react-icons/bs'
import { CiMedicalClipboard } from 'react-icons/ci'
import { IoAttachOutline } from 'react-icons/io5'
import { AiFillAudio } from 'react-icons/ai'
import { useUsersContext } from '../../../Context'
const UserTopInfo = ({user}) => {

  if(!user){
    return(
      <div>
        <h1>Loading</h1>
      </div>
    )
  }
  
  return (
    <div className='top-container'>
      <div className="image-search-container">
        <img src={user.picture} alt={user.firstName} className='person-top' />
        <div className="search search-top">
          <input type="text" placeholder=' What is on your mind' />

        </div>
        

      </div>
      <hr  className='horizontal-line'/>
      <div className="attachment-container">
        <div className='attachment-top'>
        <div className="image-attachment toper">
          <BsCardImage className='attach-icons' />
          <p>Image</p>
        </div>
        <div className="clip-attachment toper">
          <CiMedicalClipboard className='attach-icons'/>
          <p>Clip</p>

        </div>
        <div className="attached-attachment toper">
          <IoAttachOutline className='attach-icons'/>
          <p>Attachment</p>

        </div>
        <div className="audio-attachment toper">
          <AiFillAudio className='attach-icons'/>
          <p>Audio</p>

          
        </div>
        </div>
        <button className='post'>
          Post
        </button>

      </div>
    </div>
  )
}

export default UserTopInfo;