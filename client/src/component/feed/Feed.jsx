import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
import { useEffect, useState } from "react";
import axios from "axios";
import { ContentPasteOffSharp } from "@mui/icons-material";
const Feed = () => {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const response = await axios.get(
      "http://localhost:8000/connectverse/post/userpost/",
      {}
    );

    console.log(response.data);

    setPost(response.data.Post);
  };

  const printPost = () => {
    console.log(post);
  };
  useEffect(() => {
    getPost();
    printPost();
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share />
      {post.map((item, index) => (
        <Post key={item.id} post={item} />
      ))}
      <Post />
    </div>
  );
};

export default Feed;
