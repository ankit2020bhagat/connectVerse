import React from "react";
import "./topbar.css";
import { Person, Search, Chat, Notifications } from "@mui/icons-material";

const TopBar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">ConnectVerse</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friends post and video"
            className="searchInput"
          />
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarLink">
          <span className="topbarLink">HomePage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src="/assets/Persons/25.jpg" alt="" className="topbarImg" />
      </div>
    </div>
  );
};

export default TopBar;
