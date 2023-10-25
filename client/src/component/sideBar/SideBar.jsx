import React from "react";
import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircle,
  Groups,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@mui/icons-material";
const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <RssFeed className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <Chat className="sidebarIcon" />
            <span className="sidebarListItemText">Chat</span>
          </li>
          <li className="sidebarListItem">
            <PlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Video</span>
          </li>
          <li className="sidebarListItem">
            <Groups className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmark</span>
          </li>
          <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">HelpOutline</span>
          </li>
          <li className="sidebarListItem">
            <WorkOutline className="sidebarIcon" />
            <span className="sidebarListItemText">WorkOutline</span>
          </li>
          <li className="sidebarListItem">
            <Event className="sidebarIcon" />
            <span className="sidebarListItemText">Event</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">School</span>
          </li>
        </ul>
        <button className="sidebarButton">show more</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
          <li className="sidebarFriend">
            <img
              src="/assets/Persons/43.jpg"
              alt=""
              className="sidebarFriendImg"
            />
            <span className="sidebarFriendName">Muskan</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
