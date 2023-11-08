import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../dummyData";
const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper"></div>
      <Share />
      {Posts.map((item, index) => (
        <Post key={item.id} post={item} />
      ))}
      <Post />
    </div>
  );
};

export default Feed;
