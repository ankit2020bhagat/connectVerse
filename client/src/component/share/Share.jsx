import React from "react";
import { PermMedia } from "@mui/icons-material/";
import "./share.css";
const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImage"
            src="/assets/Persons/4.jpg"
            alt=""
          ></img>
          <input
            placeholder="What's in your mind?"
            className="shareInput"
          ></input>
        </div>
        <hr className="shareHR" />
        <div className="shareButton">
          <div className="shareOptions"></div>
          <div className="shareOption">
            <PermMedia className="shareIcon" />
            <span className="shareOptionText">Photos or Video</span>
          </div>
        </div>
        <div className="shareTop"></div>
      </div>
    </div>
  );
};

export default Share;
