import React, { useState } from "react";
import { MoreVert } from "@mui/icons-material";
import { Users } from "../../dummyData";
import "./post.css";

const Post = ({ post }) => {
  const [like, setLike] = useState(post?.like);
  const [isLike, setIsLiked] = useState(false);
  const PF = "http://localhost:5173/assets/";
  const handleLike = () => {
    setLike(isLike ? like + 1 : like - 1);
    setIsLiked(!isLike);
  };
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={
                Users.filter((u) => u.id === post?.userId)[0]?.profilePicture
              }
              alt=""
            ></img>
            <span className="postUserName">
              {Users.filter((u) => u.id === post?.userId)[0]?.username}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImg" src={PF + post?.photo} alt="" />
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
