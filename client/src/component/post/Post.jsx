import React, { useEffect, useState } from "react";
import { MoreVert } from "@mui/icons-material";

import "./post.css";
import axios from "axios";
const Post = ({ post }) => {
  const [like, setLike] = useState(post?.likes.length);
  const [isLike, setIsLiked] = useState(false);
  const [Users, setUser] = useState([]);
  const PF = "http://localhost:5173/assets/Persons/";
  const handleLike = () => {
    setLike(isLike ? like + 1 : like - 1);
    setIsLiked(!isLike);
  };
  const getUser = async () => {
    const result = await axios.get(
      "http://localhost:8000/connectverse/user/",
      {}
    );

    console.log(result.data);

    setUser(result.data.User);
  };
  const print = () => {
    console.log(Users.filter((u) => u._id === post?.userId)[0]?.profilepicture);
  };
  useEffect(() => {
    getUser();
    print();
  }, [post]);
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                PF +
                Users.filter((u) => u._id === post?.userId)[0]?.profilepicture
              }
              alt=""
            ></img>
            <span className="postUserName">
              {Users.filter((u) => u._id === post?.userId)[0]?.username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post?.image} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              alt=""
              onClick={handleLike}
            />
            <img
              className="likeIcon"
              src={`${PF}heart.png`}
              alt=""
              onClick={handleLike}
            />
            <span className="postLikeCounter">{like}</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommnetText">comment {post?.comment}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
