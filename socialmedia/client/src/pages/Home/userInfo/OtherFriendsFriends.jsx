import React from "react";
import { useState } from "react";
import { IoPersonRemove } from "react-icons/io5";
import { useUsersContext } from "../../../Context";
import useFetch from "../../../hooks/useFetch";
import { useEffect } from "react";

const OtherFriendsFriends = ({ user }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const { data } = useFetch("http://localhost:8080/api/v1/auth/find/friends", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      ids: user?.friends,
    }),
  });
  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  return (
    <div className="friend-containers">
      <h1>Friend List</h1>
      {!users ? (
        <h1>Your Friends Bucket is empty</h1>
      ) : (
        users?.users?.map((user) => {
          const { id, photo, firstName, lastName } = user;

          return (
            <div className="individual-friend" key={id}>
              <div className="name-place">
                <div className="pic-names-container">
                  <img src={photo} alt={firstName} />
                  <h5>{`${firstName} ${lastName} `}</h5>
                </div>
              </div>
              <IoPersonRemove className="remove-icon" />
            </div>
          );
        })
      )}
    </div>
  );
};

export default OtherFriendsFriends;
