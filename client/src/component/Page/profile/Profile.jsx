import React from "react";
import TopBar from "../../TopBar/TopBar";
import SideBar from "../../sideBar/SideBar";
import Feed from "../../feed/Feed";
import RightBar from "../../rightBar/RightBar";
import "./profile.css";
const Profile = () => {
  const PF = "http://localhost:5173/assets/";
  return (
    <>
      <TopBar />
      <div className="profile">
        <SideBar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profilecover">
              <img
                src={`${PF}Persons/4.jpg`}
                alt=""
                className="profileCoverImg"
              />
              <img
                src={`${PF}Persons/25.jpg`}
                alt=""
                className="profileUserImg"
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Carolina Pots</h4>
              <span className="profileInfoDesc">Hello my friends</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <RightBar profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
