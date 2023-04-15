import { IoPersonAdd } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { MdWorkOutline } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { useUsersContext } from "../../../Context";

const FriendsProfile = ({ otherUser }) => {
  const { user } = useUsersContext();
  const handleAddFriend = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/v1/auth/addFriend`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          personId: otherUser?._id,
          userId: user?._id,
        }),
      });
      const friendsData = await res.json();
      if (friendsData) {
        let localUser = JSON.parse(localStorage.getItem("user"));
        localUser = { ...localUser, friends: friendsData.friends };
        localStorage.setItem("user", JSON.stringify(localUser));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="user-info-container">
      <div className="image-name-container">
        <div className="profile-image">
          <div className="background-stand"></div>
          <img src={otherUser?.photo} alt={otherUser?.firstName} />
        </div>
        <div className="friends-name-container">
          <h3>{`${otherUser?.firstName} ${otherUser?.lastName}`} </h3>
          <p>{otherUser?.friends?.length} friends</p>
        </div>
        <IoPersonAdd className="add-person" onClick={handleAddFriend} />
      </div>
      <hr className="horizontal-line" />
      <div className="location-container">
        <div className="location-profile">
          <IoLocationOutline className="profile-icon" />
          <p>{otherUser?.placeOfResidence}</p>
        </div>
        <div className="location-profile">
          <MdWorkOutline className="profile-icon" />
          {otherUser?.job}
        </div>
      </div>
      <hr className="horizontal-line" />
      <div className="impressions-container">
        <p className="watched">
          number of profile watch :{" "}
          <span>{otherUser?.numberOfProfileView} </span>
        </p>
        <p className="impressions">
          impressions on your profile :{" "}
          <span>{otherUser?.impressionsOnProfile} </span>
        </p>
      </div>
      <hr className="horizontal-line" />
      <div className="social-media-container">
        <div className="twitter">
          <AiOutlineTwitter className="tweet" />
          <div>
            <h4>twitter</h4>
            <p>{otherUser?.twitterAccount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendsProfile;
