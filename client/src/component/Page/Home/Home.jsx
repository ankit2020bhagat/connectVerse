import "./home.css";

import SideBar from "../../sideBar/SideBar";
import TopBar from "../../TopBar/TopBar";
import Feed from "../../feed/Feed";
import RightBar from "../../rightBar/RightBar";
const Home = () => {
  return (
    <div>
      <TopBar />
      <div className="homecontainer">
        <SideBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  );
};

export default Home;
