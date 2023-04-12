import { IoPersonAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";

const UserInfo = ({ user }) => {
  if (!user) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
  return (
    <div className="user-info-container">
      <div className="image-name-container">
        <div className="profile-image">
          <div className="background-stand"></div>
          <img src={user.photo} alt={user.firstName} />
        </div>
        <div className="friends-name-container">
          <h3>{`${user.firstName} ${user.lastName}`} </h3>
          <p>{user.friends.length} friends</p>
        </div>
        <IoPersonAdd className="add-person" />
      </div>
      <hr className="horizontal-line" />
      <div className="location-container">
        <div className="location-profile">
          <IoLocationOutline className="profile-icon" />
          <p>{user.placeOfResidence}</p>
        </div>
        <div className="location-profile">
          <MdWorkOutline className="profile-icon" />
          {user.job}
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="impressions-container">
        <p className="watched">
          number of profile watch : <span>{user.numberOfProfileView} </span>
        </p>
        <p className="impressions">
          impressions on your profile :{" "}
          <span>{user.impressionsOnProfile} </span>
        </p>
      </div>
      <hr className="horizontal-line" />
      <div className="social-media-container">
        <div className="twitter">
          <AiOutlineTwitter className="tweet" />
          <div>
            <h4>twitter</h4>
            <p>{user.twitterAccount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
