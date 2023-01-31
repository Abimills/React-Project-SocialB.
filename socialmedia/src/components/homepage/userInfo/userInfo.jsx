import { IoPersonAdd } from 'react-icons/io5'
import { IoLocationOutline } from 'react-icons/io5'
import { MdWorkOutline } from 'react-icons/md'
import { AiOutlineTwitter } from 'react-icons/ai'



const UserInfo = ({user}) => {
  const jobs= ['Developer','Doctor','Bartender','Nurse','Accountant','Manager','Carpenter','Teacher','Model','Cyclist','Vet','Pilot','HR']
 
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
          <p>{'London' }</p>
        </div>
        <div className="location-profile">
          <MdWorkOutline className='profile-icon' />
          <p>{jobs[Math.floor(Math.random()*12)]}</p>
        </div>

      </div>
      <hr className='horizontal-line' />
      <div className="impressions-container">
        
        <p className='watched'>who watched your profile : <span>{Math.floor(Math.random()*500)} </span></p>
        <p className='impressions'>impressions on your profile : <span>{Math.floor(Math.random()*300)} </span></p>


      </div>
      <hr className='horizontal-line' />
      <div className="social-media-container">
       
        <div className="twitter">
          < AiOutlineTwitter  className='tweet'/>
          <div>

          <h4>twitter</h4>
          <p>{`${user.firstName}@twitter.com`}</p>
          </div>
        </div>
        

      </div>

      

    </div>
  )
}

export default UserInfo