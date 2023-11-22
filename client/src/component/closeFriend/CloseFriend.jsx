import React from "react";
import "./closefriend.css";
const CloseFriend = ({ user }) => {
  const PF = "http://localhost:5173/assets/";
  return (
    <div>
      <li className="sidebarFriend">
        <img
          src={PF + user.profilePicture}
          alt=""
          className="sidebarFriendImg"
        />

        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
};

export default CloseFriend;
