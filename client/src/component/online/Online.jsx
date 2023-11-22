import React from "react";
import "./online.css";
const Online = ({ user }) => {
  const PF = "http://localhost:5173/assets/";
  return (
    <div>
      <li className="rightbarFriend">
        <div className="rightbarProfileImgContainer">
          <img
            className="rightbarProfileImage"
            src={PF + user.profilePicture}
          />
          <span className="rightbarOnline"></span>
        </div>
        <span className="rightbarUsername"> {user.username}</span>
      </li>
    </div>
  );
};

export default Online;
