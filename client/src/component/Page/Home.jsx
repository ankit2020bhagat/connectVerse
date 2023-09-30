import React, { useEffect, useState } from "react";
import axios from "axios";
const Home = () => {
  const [user, setUser] = useState({});
  const [selectfile, setSelectFile] = useState(null);
  const getProfile = async () => {
    const token = JSON.parse(sessionStorage.getItem("token"));
    console.log(token.data.token);
    if (token) {
      const response = await axios.get(
        "http://localhost:8000/connectverse/user/profile",
        { headers: { Authorization: token.data.token } }
      );
      console.log(response.data.Profile.followers.length);
      setUser(response.data.Profile);
    }
    try {
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectFile(file);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (selectfile) {
      console.log("Selelcted file");
    }
  };
  return (
    <div>
      <h2>Profile</h2>
      <h3>{user.username}</h3>
      <h3>followers:{user.followers && user.followers.length}</h3>
      <h3>following:{user.following && user.following.length}</h3>
      <form onSubmit={handleOnSubmit}>
        <input type="file" accept="image" onChange={handleFileChange}></input>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default Home;
